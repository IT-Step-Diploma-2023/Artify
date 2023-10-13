using Artify.DAL;
using Artify.Data;
using Artify.Models.DbModels.DbModels.Artworks;
using Artify.Models.DbModels.DbModels.Artworks.Attributes;
using Artify.Models.DbModels.Users;
using Artify.Models.DbModels.Users.Attributes;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.PlatformAbstractions;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    var config = builder.Configuration;

    var connectionString = config.GetConnectionString("DefaultConnection");
    //var connectionString = config.GetConnectionString("AzureConnection");
    options.UseSqlServer(connectionString);
    options.UseLazyLoadingProxies();
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        RequireExpirationTime = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"] ?? throw new Exception("Invalid jwt"))),
    };
});

builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingDefault;
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
if (builder.Environment.IsDevelopment())
{
    builder.Services.AddSwaggerGen(swagger =>
    {
        swagger.IncludeXmlComments(Path.Combine(PlatformServices.Default.Application.ApplicationBasePath, "SwaggerInfo.xml"));
    });
}

//Adding repositories
builder.Services.AddTransient<IRepository<User>, UsersRepository>();
builder.Services.AddTransient<IRepository<UserRole>, UserRolesRepository>();
builder.Services.AddTransient<IRepository<Shot>, ShotsRepository>();
builder.Services.AddTransient<IRepository<Genre>, GenresRepository>();
builder.Services.AddTransient<IRepository<Tag>, TagsRepository>();
builder.Services.AddTransient<IRepository<SocialProfile>, SocialProfilesRepository>();

var app = builder.Build();

//Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapGet("/", () => "Online!!!");

app.MapControllers();

//using (var db = app.Services.GetService<ApplicationDbContext>())
//{
//    if (db != null)
//        db.Database.Migrate();
//}

app.UseDeveloperExceptionPage();

app.Run();
