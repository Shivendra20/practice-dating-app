using System.Text;
using API.Data;
using API.Extensions;
using API.Interface;
using API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddAplicationServices(builder.Configuration);
builder.Services.AddAplicationTokenServices(builder.Configuration);
var app = builder.Build();

app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200"));

app.UseHttpsRedirection();

app.UseAuthentication(); // Says you are allowed to do

app.UseAuthorization(); // Says what are you allowed to do 

app.MapControllers();

app.Run();
