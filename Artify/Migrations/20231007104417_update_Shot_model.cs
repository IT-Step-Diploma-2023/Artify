using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Artify.Migrations
{
    /// <inheritdoc />
    public partial class update_Shot_model : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "isPublic",
                table: "Shots",
                newName: "IsPublic");

            migrationBuilder.RenameColumn(
                name: "isDraft",
                table: "Shots",
                newName: "IsDraft");

            migrationBuilder.RenameColumn(
                name: "blocksGap",
                table: "Shots",
                newName: "BlocksGap");

            migrationBuilder.RenameColumn(
                name: "thumbnailFullPath",
                table: "Images",
                newName: "ThumbnailFullPath");

            migrationBuilder.RenameColumn(
                name: "imagePath",
                table: "Images",
                newName: "ImagePath");

            migrationBuilder.AddColumn<string>(
                name: "Cover",
                table: "Shots",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cover",
                table: "Shots");

            migrationBuilder.RenameColumn(
                name: "IsPublic",
                table: "Shots",
                newName: "isPublic");

            migrationBuilder.RenameColumn(
                name: "IsDraft",
                table: "Shots",
                newName: "isDraft");

            migrationBuilder.RenameColumn(
                name: "BlocksGap",
                table: "Shots",
                newName: "blocksGap");

            migrationBuilder.RenameColumn(
                name: "ThumbnailFullPath",
                table: "Images",
                newName: "thumbnailFullPath");

            migrationBuilder.RenameColumn(
                name: "ImagePath",
                table: "Images",
                newName: "imagePath");
        }
    }
}
