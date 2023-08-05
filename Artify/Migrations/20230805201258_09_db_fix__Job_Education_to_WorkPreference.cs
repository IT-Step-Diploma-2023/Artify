using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Artify.Migrations
{
    /// <inheritdoc />
    public partial class _09_db_fix__Job_Education_to_WorkPreference : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EducationWorkPreference");

            migrationBuilder.DropTable(
                name: "JobWorkPreference");

            migrationBuilder.AddColumn<int>(
                name: "WorkPreferenceId",
                table: "Jobs",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WorkPreferenceId",
                table: "Educations",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Jobs_WorkPreferenceId",
                table: "Jobs",
                column: "WorkPreferenceId");

            migrationBuilder.CreateIndex(
                name: "IX_Educations_WorkPreferenceId",
                table: "Educations",
                column: "WorkPreferenceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Educations_WorkPreferences_WorkPreferenceId",
                table: "Educations",
                column: "WorkPreferenceId",
                principalTable: "WorkPreferences",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Jobs_WorkPreferences_WorkPreferenceId",
                table: "Jobs",
                column: "WorkPreferenceId",
                principalTable: "WorkPreferences",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Educations_WorkPreferences_WorkPreferenceId",
                table: "Educations");

            migrationBuilder.DropForeignKey(
                name: "FK_Jobs_WorkPreferences_WorkPreferenceId",
                table: "Jobs");

            migrationBuilder.DropIndex(
                name: "IX_Jobs_WorkPreferenceId",
                table: "Jobs");

            migrationBuilder.DropIndex(
                name: "IX_Educations_WorkPreferenceId",
                table: "Educations");

            migrationBuilder.DropColumn(
                name: "WorkPreferenceId",
                table: "Jobs");

            migrationBuilder.DropColumn(
                name: "WorkPreferenceId",
                table: "Educations");

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

            migrationBuilder.CreateIndex(
                name: "IX_EducationWorkPreference_WorkPreferencesId",
                table: "EducationWorkPreference",
                column: "WorkPreferencesId");

            migrationBuilder.CreateIndex(
                name: "IX_JobWorkPreference_WorkPreferencesId",
                table: "JobWorkPreference",
                column: "WorkPreferencesId");
        }
    }
}
