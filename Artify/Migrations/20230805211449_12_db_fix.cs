using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Artify.Migrations
{
    /// <inheritdoc />
    public partial class _12_db_fix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MemberUserid",
                table: "TeamMembers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_TeamMembers_MemberUserid",
                table: "TeamMembers",
                column: "MemberUserid");

            migrationBuilder.AddForeignKey(
                name: "FK_TeamMembers_Users_MemberUserid",
                table: "TeamMembers",
                column: "MemberUserid",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TeamMembers_Users_MemberUserid",
                table: "TeamMembers");

            migrationBuilder.DropIndex(
                name: "IX_TeamMembers_MemberUserid",
                table: "TeamMembers");

            migrationBuilder.DropColumn(
                name: "MemberUserid",
                table: "TeamMembers");
        }
    }
}
