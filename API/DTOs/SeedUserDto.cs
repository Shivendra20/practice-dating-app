namespace API.DTOs;

public class SeedUserDto
{
    public string Id { get; set; }
    public required string Email { get; set; }
    public DateOnly DateOfBirth { get; set; }
    public string? ImageUrl { get; set; }
    public required string DisplayName { get; set; }
    public DateTime Created { get; set; }
    public DateTime LastActive { get; set; }
    public string Gender { get; set; }
    public string? Description { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
}