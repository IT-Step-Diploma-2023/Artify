using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Artify.Migrations
{
    /// <inheritdoc />
    public partial class _06_db_fix__User_Follower : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FollowerUser_Followers_UserId",
                table: "FollowerUser");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Followers");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "FollowerUser",
                newName: "FollowersId");

            migrationBuilder.AddForeignKey(
                name: "FK_FollowerUser_Followers_FollowersId",
                table: "FollowerUser",
                column: "FollowersId",
                principalTable: "Followers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FollowerUser_Followers_FollowersId",
                table: "FollowerUser");

            migrationBuilder.RenameColumn(
                name: "FollowersId",
                table: "FollowerUser",
                newName: "UserId");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Followers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_FollowerUser_Followers_UserId",
                table: "FollowerUser",
                column: "UserId",
                principalTable: "Followers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
