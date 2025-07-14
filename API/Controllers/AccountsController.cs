using System.Security.Cryptography;
using System.Security.Principal;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;

namespace API.Controllers
{
    public class AccountsController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly ITokenService _tokenService;
        public AccountsController(DataContext context, ITokenService tokenService)
        {
            _tokenService = tokenService;
            _context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<AppUser>> Register([FromBody]RegisterDto registerDto)
        {
            if(await UserExists(registerDto.UserName))  return BadRequest("DisplayName is taken.");

            using var hmac = new HMACSHA512();

             var user = new AppUser
             {
                DisplayName = registerDto.UserName.ToLower(),
                Email = registerDto.Email.ToLower(),
                PasswardHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
             };

             _context.Users.Add(user);
             await _context.SaveChangesAsync();

             return user;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> LoginUser(LoginDto loginDto )
        {
            var user = await _context.Users.SingleOrDefaultAsync(x =>
            x.DisplayName == loginDto.UserName);

            if(user == null) return Unauthorized();

            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computeHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

           for (int i = 0; i < computeHash.Length; i++)
           {
            if(computeHash[i] != user.PasswardHash[i]) return Unauthorized("invailid passward");
           }
           
           return new UserDTO
           {
            Username = user.DisplayName,
            Token = _tokenService.CreateToken(user)
           };
        }

        private async Task<bool> UserExists(string DisplayName)
        {
            return await _context.Users.AnyAsync(x => x.DisplayName == DisplayName.ToLower());
        }
    }
}
