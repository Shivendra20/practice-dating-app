using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MembersController(IMemberRepository _memberRepository) : BaseApiController
{

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Member>>> GetMembers()
    {
        var members = await _memberRepository.GetMembersAsync();
        return Ok(members);
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<Member>> GetMember(string id)
    {
        var member = await _memberRepository.GetMemberByIdAsync(id);
        if (member == null) return NotFound("Member not found");
        return Ok(member);
    }

    [HttpGet("{id}/photos")]
    public async Task<ActionResult<IReadOnlyList<Photo>>> GetMemberPhotos(string id)
    {
        var photos = await _memberRepository.GetMemberPhotoAsync(id);
        if (photos == null || !photos.Any()) return NotFound("No photos found for this member");
        return Ok(photos);
    }
}