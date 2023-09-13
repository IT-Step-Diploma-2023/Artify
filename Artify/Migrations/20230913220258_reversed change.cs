using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Artify.Migrations
{
    /// <inheritdoc />
#pragma warning disable CS8981 // The type name only contains lower-cased ascii characters. Such names may become reserved for the language.
    public partial class reversedchange : Migration
#pragma warning restore CS8981 // The type name only contains lower-cased ascii characters. Such names may become reserved for the language.
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Shots_Users_UserId",
                table: "Shots");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Shots",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Shots_Users_UserId",
                table: "Shots",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Shots_Users_UserId",
                table: "Shots");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Shots",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Shots_Users_UserId",
                table: "Shots",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
