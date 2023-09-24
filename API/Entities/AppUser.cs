namespace API.Entities;

public class AppUser
{
    public int Id { get; set; } 
   public string UserName { get; set; }
   public byte[] passwardHash { get; set; }
   public byte[] passwordSalt { get; set; }
}
