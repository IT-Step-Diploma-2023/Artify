using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Artify.Migrations
{
    /// <inheritdoc />
    public partial class second_db_fix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Billings_Users_UserId",
                table: "Billings");

            migrationBuilder.DropForeignKey(
                name: "FK_Vacancies_Users_UserId",
                table: "Vacancies");

            migrationBuilder.DropIndex(
                name: "IX_Billings_UserId",
                table: "Billings");

            migrationBuilder.DropColumn(
                name: "FreelanceAvailable",
                table: "WorkPreferences");

            migrationBuilder.DropColumn(
                name: "FullTimeAvailable",
                table: "WorkPreferences");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Billings");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Vacancies",
                newName: "EmployerId");

            migrationBuilder.RenameIndex(
                name: "IX_Vacancies_UserId",
                table: "Vacancies",
                newName: "IX_Vacancies_EmployerId");

            migrationBuilder.AddColumn<int>(
                name: "InheritedRoleId",
                table: "UserRoles",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "BillingUser",
                columns: table => new
                {
                    BillingsId = table.Column<int>(type: "int", nullable: false),
                    UsersId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BillingUser", x => new { x.BillingsId, x.UsersId });
                    table.ForeignKey(
                        name: "FK_BillingUser_Billings_BillingsId",
                        column: x => x.BillingsId,
                        principalTable: "Billings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BillingUser_Users_UsersId",
                        column: x => x.UsersId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BillingUser_UsersId",
                table: "BillingUser",
                column: "UsersId");

            migrationBuilder.AddForeignKey(
                name: "FK_Vacancies_Employers_EmployerId",
                table: "Vacancies",
                column: "EmployerId",
                principalTable: "Employers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vacancies_Employers_EmployerId",
                table: "Vacancies");

            migrationBuilder.DropTable(
                name: "BillingUser");

            migrationBuilder.DropColumn(
                name: "InheritedRoleId",
                table: "UserRoles");

            migrationBuilder.RenameColumn(
                name: "EmployerId",
                table: "Vacancies",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Vacancies_EmployerId",
                table: "Vacancies",
                newName: "IX_Vacancies_UserId");

            migrationBuilder.AddColumn<bool>(
                name: "FreelanceAvailable",
                table: "WorkPreferences",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "FullTimeAvailable",
                table: "WorkPreferences",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Billings",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Billings_UserId",
                table: "Billings",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Billings_Users_UserId",
                table: "Billings",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Vacancies_Users_UserId",
                table: "Vacancies",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
