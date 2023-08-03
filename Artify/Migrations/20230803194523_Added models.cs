using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Artify.Migrations
{
    /// <inheritdoc />
    public partial class Addedmodels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_UserRoles_RoleId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_RoleId",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "Users",
                newName: "Username");

            migrationBuilder.AddColumn<int>(
                name: "BillingId",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Biography",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Info",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LogoImage",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "UserRoleId",
                table: "Users",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WebSite",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "Billings",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CardNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CardHolderName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CardExp = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CardCVV = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Billings", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Educations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Degree = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Institution = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    StartYear = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FinishYear = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Educations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EmployerComments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    EmployerId = table.Column<int>(type: "int", nullable: false),
                    Text = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployerComments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FreelanceAvailabilities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    FixedPrice = table.Column<decimal>(type: "money", precision: 18, scale: 2, nullable: false),
                    MinHourlyRate = table.Column<decimal>(type: "money", precision: 18, scale: 2, nullable: false),
                    MinContractHours = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FreelanceAvailabilities", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FreelanceAvailabilities_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Genres",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Genres", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Jobs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Position = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: false),
                    Company = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    StartYear = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FinishYear = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jobs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "JwtUsers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RoleId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JwtUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Permissions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Tag = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Permissions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Salaries",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MinSalary = table.Column<decimal>(type: "money", precision: 18, scale: 2, nullable: false),
                    MaxSalary = table.Column<decimal>(type: "money", precision: 18, scale: 2, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Salaries", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Shots",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shots", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Shots_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SocialProfiles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SocialProfiles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Specialities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Specialities", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tags",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tags", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tools",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tools", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserFollowers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    FollowerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserFollowers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserLogins",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserLogins", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PermissionUserRole",
                columns: table => new
                {
                    PermissionsId = table.Column<int>(type: "int", nullable: false),
                    RolesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PermissionUserRole", x => new { x.PermissionsId, x.RolesId });
                    table.ForeignKey(
                        name: "FK_PermissionUserRole_Permissions_PermissionsId",
                        column: x => x.PermissionsId,
                        principalTable: "Permissions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PermissionUserRole_UserRoles_RolesId",
                        column: x => x.RolesId,
                        principalTable: "UserRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FullTimeAvailabilities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RemoteAvailable = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    SalaryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FullTimeAvailabilities", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FullTimeAvailabilities_Salaries_SalaryId",
                        column: x => x.SalaryId,
                        principalTable: "Salaries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FullTimeAvailabilities_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Albums",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Discriminator = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ShotId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Albums", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Albums_Shots_ShotId",
                        column: x => x.ShotId,
                        principalTable: "Shots",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Albums_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Appreciations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    ShotId = table.Column<int>(type: "int", nullable: false),
                    Discriminator = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Text = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ShotId1 = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Appreciations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Appreciations_Shots_ShotId",
                        column: x => x.ShotId,
                        principalTable: "Shots",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Appreciations_Shots_ShotId1",
                        column: x => x.ShotId1,
                        principalTable: "Shots",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Appreciations_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GenreShot",
                columns: table => new
                {
                    GenresId = table.Column<int>(type: "int", nullable: false),
                    ShotsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GenreShot", x => new { x.GenresId, x.ShotsId });
                    table.ForeignKey(
                        name: "FK_GenreShot_Genres_GenresId",
                        column: x => x.GenresId,
                        principalTable: "Genres",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GenreShot_Shots_ShotsId",
                        column: x => x.ShotsId,
                        principalTable: "Shots",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Images",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Price = table.Column<decimal>(type: "money", precision: 18, scale: 2, nullable: false),
                    ShotId = table.Column<int>(type: "int", nullable: false),
                    CreatedDateTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Images", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Images_Shots_ShotId",
                        column: x => x.ShotId,
                        principalTable: "Shots",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserSocialProfiles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    SocialProfileId = table.Column<int>(type: "int", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserSocialProfiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserSocialProfiles_SocialProfiles_SocialProfileId",
                        column: x => x.SocialProfileId,
                        principalTable: "SocialProfiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserSocialProfiles_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Vacancies",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RemoteAvailable = table.Column<int>(type: "int", nullable: false),
                    Salary = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmpType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedDateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    InBest = table.Column<bool>(type: "bit", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    SpecialityId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vacancies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Vacancies_Specialities_SpecialityId",
                        column: x => x.SpecialityId,
                        principalTable: "Specialities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Vacancies_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ShotTag",
                columns: table => new
                {
                    ShotsId = table.Column<int>(type: "int", nullable: false),
                    TagsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShotTag", x => new { x.ShotsId, x.TagsId });
                    table.ForeignKey(
                        name: "FK_ShotTag_Shots_ShotsId",
                        column: x => x.ShotsId,
                        principalTable: "Shots",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ShotTag_Tags_TagsId",
                        column: x => x.TagsId,
                        principalTable: "Tags",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ShotTool",
                columns: table => new
                {
                    ShotsId = table.Column<int>(type: "int", nullable: false),
                    ToolsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShotTool", x => new { x.ShotsId, x.ToolsId });
                    table.ForeignKey(
                        name: "FK_ShotTool_Shots_ShotsId",
                        column: x => x.ShotsId,
                        principalTable: "Shots",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ShotTool_Tools_ToolsId",
                        column: x => x.ToolsId,
                        principalTable: "Tools",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WorkPreferences",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullTimeAvailable = table.Column<bool>(type: "bit", nullable: false),
                    FreelanceAvailable = table.Column<bool>(type: "bit", nullable: false),
                    Skills = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    FullTimeAvailabilityId = table.Column<int>(type: "int", nullable: false),
                    FreelanceAvailabilityId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkPreferences", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WorkPreferences_FreelanceAvailabilities_FreelanceAvailabilityId",
                        column: x => x.FreelanceAvailabilityId,
                        principalTable: "FreelanceAvailabilities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_WorkPreferences_FullTimeAvailabilities_FullTimeAvailabilityId",
                        column: x => x.FullTimeAvailabilityId,
                        principalTable: "FullTimeAvailabilities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_WorkPreferences_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AlbumShot",
                columns: table => new
                {
                    AlbumsId = table.Column<int>(type: "int", nullable: false),
                    ShotsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AlbumShot", x => new { x.AlbumsId, x.ShotsId });
                    table.ForeignKey(
                        name: "FK_AlbumShot_Albums_AlbumsId",
                        column: x => x.AlbumsId,
                        principalTable: "Albums",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AlbumShot_Shots_ShotsId",
                        column: x => x.ShotsId,
                        principalTable: "Shots",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EducationWorkPreference",
                columns: table => new
                {
                    EducationsId = table.Column<int>(type: "int", nullable: false),
                    WorkPreferencesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EducationWorkPreference", x => new { x.EducationsId, x.WorkPreferencesId });
                    table.ForeignKey(
                        name: "FK_EducationWorkPreference_Educations_EducationsId",
                        column: x => x.EducationsId,
                        principalTable: "Educations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EducationWorkPreference_WorkPreferences_WorkPreferencesId",
                        column: x => x.WorkPreferencesId,
                        principalTable: "WorkPreferences",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "JobWorkPreference",
                columns: table => new
                {
                    JobsId = table.Column<int>(type: "int", nullable: false),
                    WorkPreferencesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobWorkPreference", x => new { x.JobsId, x.WorkPreferencesId });
                    table.ForeignKey(
                        name: "FK_JobWorkPreference_Jobs_JobsId",
                        column: x => x.JobsId,
                        principalTable: "Jobs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_JobWorkPreference_WorkPreferences_WorkPreferencesId",
                        column: x => x.WorkPreferencesId,
                        principalTable: "WorkPreferences",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SpecialityWorkPreference",
                columns: table => new
                {
                    SpecialitiesId = table.Column<int>(type: "int", nullable: false),
                    WorkPreferencesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpecialityWorkPreference", x => new { x.SpecialitiesId, x.WorkPreferencesId });
                    table.ForeignKey(
                        name: "FK_SpecialityWorkPreference_Specialities_SpecialitiesId",
                        column: x => x.SpecialitiesId,
                        principalTable: "Specialities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SpecialityWorkPreference_WorkPreferences_WorkPreferencesId",
                        column: x => x.WorkPreferencesId,
                        principalTable: "WorkPreferences",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_UserRoleId",
                table: "Users",
                column: "UserRoleId");

            migrationBuilder.CreateIndex(
                name: "IX_Albums_ShotId",
                table: "Albums",
                column: "ShotId");

            migrationBuilder.CreateIndex(
                name: "IX_Albums_UserId",
                table: "Albums",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AlbumShot_ShotsId",
                table: "AlbumShot",
                column: "ShotsId");

            migrationBuilder.CreateIndex(
                name: "IX_Appreciations_ShotId",
                table: "Appreciations",
                column: "ShotId");

            migrationBuilder.CreateIndex(
                name: "IX_Appreciations_ShotId1",
                table: "Appreciations",
                column: "ShotId1");

            migrationBuilder.CreateIndex(
                name: "IX_Appreciations_UserId",
                table: "Appreciations",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_EducationWorkPreference_WorkPreferencesId",
                table: "EducationWorkPreference",
                column: "WorkPreferencesId");

            migrationBuilder.CreateIndex(
                name: "IX_FreelanceAvailabilities_UserId",
                table: "FreelanceAvailabilities",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_FullTimeAvailabilities_SalaryId",
                table: "FullTimeAvailabilities",
                column: "SalaryId");

            migrationBuilder.CreateIndex(
                name: "IX_FullTimeAvailabilities_UserId",
                table: "FullTimeAvailabilities",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_GenreShot_ShotsId",
                table: "GenreShot",
                column: "ShotsId");

            migrationBuilder.CreateIndex(
                name: "IX_Images_ShotId",
                table: "Images",
                column: "ShotId");

            migrationBuilder.CreateIndex(
                name: "IX_JobWorkPreference_WorkPreferencesId",
                table: "JobWorkPreference",
                column: "WorkPreferencesId");

            migrationBuilder.CreateIndex(
                name: "IX_PermissionUserRole_RolesId",
                table: "PermissionUserRole",
                column: "RolesId");

            migrationBuilder.CreateIndex(
                name: "IX_Shots_UserId",
                table: "Shots",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_ShotTag_TagsId",
                table: "ShotTag",
                column: "TagsId");

            migrationBuilder.CreateIndex(
                name: "IX_ShotTool_ToolsId",
                table: "ShotTool",
                column: "ToolsId");

            migrationBuilder.CreateIndex(
                name: "IX_SpecialityWorkPreference_WorkPreferencesId",
                table: "SpecialityWorkPreference",
                column: "WorkPreferencesId");

            migrationBuilder.CreateIndex(
                name: "IX_UserSocialProfiles_SocialProfileId",
                table: "UserSocialProfiles",
                column: "SocialProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_UserSocialProfiles_UserId",
                table: "UserSocialProfiles",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Vacancies_SpecialityId",
                table: "Vacancies",
                column: "SpecialityId");

            migrationBuilder.CreateIndex(
                name: "IX_Vacancies_UserId",
                table: "Vacancies",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkPreferences_FreelanceAvailabilityId",
                table: "WorkPreferences",
                column: "FreelanceAvailabilityId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkPreferences_FullTimeAvailabilityId",
                table: "WorkPreferences",
                column: "FullTimeAvailabilityId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkPreferences_UserId",
                table: "WorkPreferences",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_UserRoles_UserRoleId",
                table: "Users",
                column: "UserRoleId",
                principalTable: "UserRoles",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_UserRoles_UserRoleId",
                table: "Users");

            migrationBuilder.DropTable(
                name: "AlbumShot");

            migrationBuilder.DropTable(
                name: "Appreciations");

            migrationBuilder.DropTable(
                name: "Billings");

            migrationBuilder.DropTable(
                name: "EducationWorkPreference");

            migrationBuilder.DropTable(
                name: "EmployerComments");

            migrationBuilder.DropTable(
                name: "GenreShot");

            migrationBuilder.DropTable(
                name: "Images");

            migrationBuilder.DropTable(
                name: "JobWorkPreference");

            migrationBuilder.DropTable(
                name: "JwtUsers");

            migrationBuilder.DropTable(
                name: "PermissionUserRole");

            migrationBuilder.DropTable(
                name: "ShotTag");

            migrationBuilder.DropTable(
                name: "ShotTool");

            migrationBuilder.DropTable(
                name: "SpecialityWorkPreference");

            migrationBuilder.DropTable(
                name: "UserFollowers");

            migrationBuilder.DropTable(
                name: "UserLogins");

            migrationBuilder.DropTable(
                name: "UserSocialProfiles");

            migrationBuilder.DropTable(
                name: "Vacancies");

            migrationBuilder.DropTable(
                name: "Albums");

            migrationBuilder.DropTable(
                name: "Educations");

            migrationBuilder.DropTable(
                name: "Genres");

            migrationBuilder.DropTable(
                name: "Jobs");

            migrationBuilder.DropTable(
                name: "Permissions");

            migrationBuilder.DropTable(
                name: "Tags");

            migrationBuilder.DropTable(
                name: "Tools");

            migrationBuilder.DropTable(
                name: "WorkPreferences");

            migrationBuilder.DropTable(
                name: "SocialProfiles");

            migrationBuilder.DropTable(
                name: "Specialities");

            migrationBuilder.DropTable(
                name: "Shots");

            migrationBuilder.DropTable(
                name: "FreelanceAvailabilities");

            migrationBuilder.DropTable(
                name: "FullTimeAvailabilities");

            migrationBuilder.DropTable(
                name: "Salaries");

            migrationBuilder.DropIndex(
                name: "IX_Users_UserRoleId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "BillingId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Biography",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Info",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Location",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "LogoImage",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "UserRoleId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "WebSite",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "Users",
                newName: "UserName");

            migrationBuilder.CreateIndex(
                name: "IX_Users_RoleId",
                table: "Users",
                column: "RoleId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_UserRoles_RoleId",
                table: "Users",
                column: "RoleId",
                principalTable: "UserRoles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
