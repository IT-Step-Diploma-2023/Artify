using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Artify.Migrations
{
    /// <inheritdoc />
    public partial class _11_db_fix__User_remove_freelance_fulltime_lists : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FreelanceAvailabilities_Users_UserId",
                table: "FreelanceAvailabilities");

            migrationBuilder.DropForeignKey(
                name: "FK_FullTimeAvailabilities_Users_UserId",
                table: "FullTimeAvailabilities");

            migrationBuilder.DropIndex(
                name: "IX_FullTimeAvailabilities_UserId",
                table: "FullTimeAvailabilities");

            migrationBuilder.DropIndex(
                name: "IX_FreelanceAvailabilities_UserId",
                table: "FreelanceAvailabilities");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "FullTimeAvailabilities");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "FreelanceAvailabilities");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "FullTimeAvailabilities",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "FreelanceAvailabilities",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_FullTimeAvailabilities_UserId",
                table: "FullTimeAvailabilities",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_FreelanceAvailabilities_UserId",
                table: "FreelanceAvailabilities",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_FreelanceAvailabilities_Users_UserId",
                table: "FreelanceAvailabilities",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_FullTimeAvailabilities_Users_UserId",
                table: "FullTimeAvailabilities",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
