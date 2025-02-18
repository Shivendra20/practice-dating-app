﻿using System.ComponentModel.DataAnnotations;
using API.Extensions;

namespace API.Entities;

public class AppUser
{
   public int Id { get; set; } 
   [Required]
   public string UserName { get; set; }
   public byte[] PasswardHash { get; set; } = new byte[0];
   public byte[] PasswordSalt { get; set; } = new byte[0];
   public DateOnly DateOfBirth { get; set; }
   public string KnownAs { get; set; }
   public DateTime Created { get; set; } = DateTime.UtcNow;
   public DateTime LastActive { get; set; }
   public string Gender { get; set; }
   public string? Introduction { get; set; }
   public string? LookingFor { get; set; }
   public string? Interests { get; set; }
   public string City { get; set; } 
   public string Country { get; set; }
   public List<Photo> Photos { get; set; } = new List<Photo>();
   public int GetAge()
   {
    return DateOfBirth.CalculateAge();
   }
}

