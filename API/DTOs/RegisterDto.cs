using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        public required string  UserName { get; set; }
        [StringLength(8, MinimumLength = 4)]
        public required string Email { get; set; }
        public required string Password { get; set; }
    }
}