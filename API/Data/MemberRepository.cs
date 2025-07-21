using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class MemberRepository(DataContext context) : IMemberRepository
{
    public Task AddMemberAsync(Member member)
    {
        throw new NotImplementedException();
    }

    public async Task DeleteMemberAsync(int id)
    {
        var member = await context.Members.FindAsync(id);
        if (member == null)
            throw new Exception("Member not found");

        context.Members.Remove(member);
        await context.SaveChangesAsync();
    }

    public async Task<Member> GetMemberByIdAsync(string id)
    {
        var member = await context.Members.FindAsync(id);

        if (member == null)
            throw new Exception("Member not found");

        return member;
    }

    public async Task<IReadOnlyList<Photo>> GetMemberPhotoAsync(string id)
    {
        return await context.Members
           .Where(x => x.Id == id)
           .SelectMany(x => x.Photos).
           ToListAsync();
    }

    public async Task<IReadOnlyList<Member>> GetMembersAsync()
    {
        return await context.Members.ToListAsync();
    }

    public async Task<bool> SaveAllAsync()
    {
        return await context.SaveChangesAsync() > 0;
    }

    public void Update(Member member)
    {
        context.Entry(member).State = EntityState.Modified;
    }

}