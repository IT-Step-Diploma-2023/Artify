using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Artify.Migrations
{
    /// <inheritdoc />
    public partial class addedfield : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Shots",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "Price",
                table: "Shots",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Shots");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Shots");
        }
    }
}
