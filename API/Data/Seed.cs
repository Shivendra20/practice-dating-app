using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedUserData(DataContext context)
        {
            if (await context.Users.AnyAsync()) return;

            var memberData = await File.ReadAllTextAsync("Data/MemberSeedData.json");
            var members = JsonSerializer.Deserialize<List<SeedUserDto>>(memberData);

            if (members == null)
            {
                Console.WriteLine("No members found in the seed data.");
                return;
            }
            
            foreach (var member in members)
            {
                using var hmac = new HMACSHA512();
                var user = new AppUser
                {
                    Id = member.Id,
                    DisplayName = member.DisplayName.ToLower(),
                    Email = member.Email.ToLower(),
                    ImageUrl = member.ImageUrl,
                    PasswardHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("pa$$w0rd")),
                    PasswordSalt = hmac.Key,
                    Member = new Member
                    {
                        Id = member.Id,
                        DisplayName = member.DisplayName,
                        Description = member.Description,
                        ImageUrl = member.ImageUrl,
                        Gender = member.Gender,
                        DateOfBirth = member.DateOfBirth,
                        City = member.City,
                        Country = member.Country,
                        Created = member.Created,
                        LastActive = member.LastActive
                    }
                };
                 
                 user.Member.Photos.Add(new Photo
                 {
                     Url = member.ImageUrl!,
                     MemberId = member.Id,
                 });

                context.Users.Add(user);
            }

            await context.SaveChangesAsync();
        }
    }
}