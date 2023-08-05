using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Artify.Migrations
{
    /// <inheritdoc />
    public partial class _07_db_fix__UserRolesPermissions : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PermissionUserRole_UserRoles_RolesId",
                table: "PermissionUserRole");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PermissionUserRole",
                table: "PermissionUserRole");

            migrationBuilder.RenameColumn(
                name: "RolesId",
                table: "PermissionUserRole",
                newName: "UserRolesId");

            migrationBuilder.RenameIndex(
                name: "IX_PermissionUserRole_RolesId",
                table: "PermissionUserRole",
                newName: "IX_PermissionUserRole_UserRolesId");

            migrationBuilder.AddColumn<int>(
                name: "UserRoleId",
                table: "PermissionUserRole",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PermissionId",
                table: "PermissionUserRole",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_PermissionUserRole",
                table: "PermissionUserRole",
                columns: new[] { "UserRoleId", "PermissionId" });

            migrationBuilder.CreateIndex(
                name: "IX_PermissionUserRole_PermissionId",
                table: "PermissionUserRole",
                column: "PermissionId");

            migrationBuilder.CreateIndex(
                name: "IX_PermissionUserRole_PermissionsId",
                table: "PermissionUserRole",
                column: "PermissionsId");

            migrationBuilder.AddForeignKey(
                name: "FK_PermissionUserRole_Permissions_PermissionId",
                table: "PermissionUserRole",
                column: "PermissionId",
                principalTable: "Permissions",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_PermissionUserRole_UserRoles_UserRoleId",
                table: "PermissionUserRole",
                column: "UserRoleId",
                principalTable: "UserRoles",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_PermissionUserRole_UserRoles_UserRolesId",
                table: "PermissionUserRole",
                column: "UserRolesId",
                principalTable: "UserRoles",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PermissionUserRole_Permissions_PermissionId",
                table: "PermissionUserRole");

            migrationBuilder.DropForeignKey(
                name: "FK_PermissionUserRole_UserRoles_UserRoleId",
                table: "PermissionUserRole");

            migrationBuilder.DropForeignKey(
                name: "FK_PermissionUserRole_UserRoles_UserRolesId",
                table: "PermissionUserRole");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PermissionUserRole",
                table: "PermissionUserRole");

            migrationBuilder.DropIndex(
                name: "IX_PermissionUserRole_PermissionId",
                table: "PermissionUserRole");

            migrationBuilder.DropIndex(
                name: "IX_PermissionUserRole_PermissionsId",
                table: "PermissionUserRole");

            migrationBuilder.DropColumn(
                name: "UserRoleId",
                table: "PermissionUserRole");

            migrationBuilder.DropColumn(
                name: "PermissionId",
                table: "PermissionUserRole");

            migrationBuilder.RenameColumn(
                name: "UserRolesId",
                table: "PermissionUserRole",
                newName: "RolesId");

            migrationBuilder.RenameIndex(
                name: "IX_PermissionUserRole_UserRolesId",
                table: "PermissionUserRole",
                newName: "IX_PermissionUserRole_RolesId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PermissionUserRole",
                table: "PermissionUserRole",
                columns: new[] { "PermissionsId", "RolesId" });

            migrationBuilder.AddForeignKey(
                name: "FK_PermissionUserRole_UserRoles_RolesId",
                table: "PermissionUserRole",
                column: "RolesId",
                principalTable: "UserRoles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
