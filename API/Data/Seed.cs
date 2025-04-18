using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedUserData(DataContext context)
        {
            // Your seeding logic goes here
            if(context.Users.Any()) return;
            var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
            var option = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            var users = JsonSerializer.Deserialize<List<AppUser>>(userData);

            foreach ( var user in users)
            {
                using var hmac = new HMACSHA256();
                user.UserName = user.UserName.ToLower();
                user.PasswardHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("pa$$w0rd"));
                user.PasswordSalt = hmac.Key;
               context.Users.Add(user);
            }

            await context.SaveChangesAsync();
        }
    }
}