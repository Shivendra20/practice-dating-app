using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;


public class Member
{
    public string Id { get; set; }
    public DateOnly DateOfBirth { get; set; }
    public string? ImageUrl { get; set; }
    public required string DisplayName { get; set; }
    public DateTime Created { get; set; }
    public DateTime LastActive { get; set; }
    public string Gender { get; set; }
    public string? Description { get; set; }
    public string City { get; set; }
    public string Country { get; set; }

    public List<Photo> Photos { get; set; } = new List<Photo>();
       
    [ForeignKey(nameof(Id))]
    public AppUser User { get; set; } = null!; // Navigation property to AppUser  
}