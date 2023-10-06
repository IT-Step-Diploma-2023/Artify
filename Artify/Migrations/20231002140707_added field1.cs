using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Artify.Migrations
{
    /// <inheritdoc />
    public partial class addedfield1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "blocksGap",
                table: "Shots",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "isPublic",
                table: "Shots",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "blocksGap",
                table: "Shots");

            migrationBuilder.DropColumn(
                name: "isPublic",
                table: "Shots");
        }
    }
}
