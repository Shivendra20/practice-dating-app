
using API.Entities;

public interface IUserRepository
{
    void Update(AppUser appUser);
    Task<bool> SaveAllAsync();
    Task<IEnumerable<AppUser>> GetAllAsync();
    Task<AppUser> GetByIdAsync(int id);
    Task<AppUser> GetAppUserByNameAsync(string name);
}
