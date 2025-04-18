using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<AppUser>> GetAllAsync()
        {
         return await _context.Users.ToListAsync();   
        }

        public async Task<AppUser> GetAppUserByNameAsync(string userName)
        {
         return await _context.Users.SingleOrDefaultAsync(u => u.UserName == userName);
        }

        public async Task<AppUser> GetByIdAsync(int id)
        {
            if (id < 0) throw new ArgumentOutOfRangeException("requested id is not valid");
            return await _context.Users.FindAsync(id);
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public  void Update(AppUser appUser)
        {
             _context.Entry(appUser).State = EntityState.Modified;
        }
    }
}