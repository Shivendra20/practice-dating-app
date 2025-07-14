using System.ComponentModel.DataAnnotations;
using API.Extensions;

namespace API.Entities;

public class AppUser
{
   public string Id { get; set; } = Guid.NewGuid().ToString();
   public required string DisplayName { get; set; }
   public required string Email { get; set; }
   public string? ImageUrl { get; set; }
   public required byte[] PasswardHash { get; set; } = new byte[0];
   public required byte[] PasswordSalt { get; set; } = new byte[0];

   // Navigation property to Member
   public Member? Member { get; set; } = null!;
}

