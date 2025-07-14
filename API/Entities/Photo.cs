
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    public class Photo
    {
        public int Id { get; set; }
        public required string Url { get; set; } = null!;
        public bool IsMain { get; set; }
        public DateTime AddedAt { get; set; } = DateTime.UtcNow;
        public string? PublicId { get; set; } = null!;

        public Member Member { get; set; } = null!; // Navigation property to Member
        public string MemberId { get; set; } = null!; // Foreign key to Member
}
}