using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Artify.Migrations
{
    /// <inheritdoc />
    public partial class _10_db_fix__WorkPreferences_JobAvailabilities : Migration
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

            migrationBuilder.DropForeignKey(
                name: "FK_WorkPreferences_FreelanceAvailabilities_FreelanceAvailabilityId",
                table: "WorkPreferences");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkPreferences_FullTimeAvailabilities_FullTimeAvailabilityId",
                table: "WorkPreferences");

            migrationBuilder.DropIndex(
                name: "IX_WorkPreferences_FreelanceAvailabilityId",
                table: "WorkPreferences");

            migrationBuilder.DropIndex(
                name: "IX_WorkPreferences_FullTimeAvailabilityId",
                table: "WorkPreferences");

            migrationBuilder.DropColumn(
                name: "FreelanceAvailabilityId",
                table: "WorkPreferences");

            migrationBuilder.DropColumn(
                name: "FullTimeAvailabilityId",
                table: "WorkPreferences");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "FullTimeAvailabilities",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "WorkPreferenceId",
                table: "FullTimeAvailabilities",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "FreelanceAvailabilities",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "WorkPreferenceId",
                table: "FreelanceAvailabilities",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_FullTimeAvailabilities_WorkPreferenceId",
                table: "FullTimeAvailabilities",
                column: "WorkPreferenceId");

            migrationBuilder.CreateIndex(
                name: "IX_FreelanceAvailabilities_WorkPreferenceId",
                table: "FreelanceAvailabilities",
                column: "WorkPreferenceId");

            migrationBuilder.AddForeignKey(
                name: "FK_FreelanceAvailabilities_Users_UserId",
                table: "FreelanceAvailabilities",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_FreelanceAvailabilities_WorkPreferences_WorkPreferenceId",
                table: "FreelanceAvailabilities",
                column: "WorkPreferenceId",
                principalTable: "WorkPreferences",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_FullTimeAvailabilities_Users_UserId",
                table: "FullTimeAvailabilities",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_FullTimeAvailabilities_WorkPreferences_WorkPreferenceId",
                table: "FullTimeAvailabilities",
                column: "WorkPreferenceId",
                principalTable: "WorkPreferences",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FreelanceAvailabilities_Users_UserId",
                table: "FreelanceAvailabilities");

            migrationBuilder.DropForeignKey(
                name: "FK_FreelanceAvailabilities_WorkPreferences_WorkPreferenceId",
                table: "FreelanceAvailabilities");

            migrationBuilder.DropForeignKey(
                name: "FK_FullTimeAvailabilities_Users_UserId",
                table: "FullTimeAvailabilities");

            migrationBuilder.DropForeignKey(
                name: "FK_FullTimeAvailabilities_WorkPreferences_WorkPreferenceId",
                table: "FullTimeAvailabilities");

            migrationBuilder.DropIndex(
                name: "IX_FullTimeAvailabilities_WorkPreferenceId",
                table: "FullTimeAvailabilities");

            migrationBuilder.DropIndex(
                name: "IX_FreelanceAvailabilities_WorkPreferenceId",
                table: "FreelanceAvailabilities");

            migrationBuilder.DropColumn(
                name: "WorkPreferenceId",
                table: "FullTimeAvailabilities");

            migrationBuilder.DropColumn(
                name: "WorkPreferenceId",
                table: "FreelanceAvailabilities");

            migrationBuilder.AddColumn<int>(
                name: "FreelanceAvailabilityId",
                table: "WorkPreferences",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "FullTimeAvailabilityId",
                table: "WorkPreferences",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "FullTimeAvailabilities",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "FreelanceAvailabilities",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_WorkPreferences_FreelanceAvailabilityId",
                table: "WorkPreferences",
                column: "FreelanceAvailabilityId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkPreferences_FullTimeAvailabilityId",
                table: "WorkPreferences",
                column: "FullTimeAvailabilityId");

            migrationBuilder.AddForeignKey(
                name: "FK_FreelanceAvailabilities_Users_UserId",
                table: "FreelanceAvailabilities",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_FullTimeAvailabilities_Users_UserId",
                table: "FullTimeAvailabilities",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkPreferences_FreelanceAvailabilities_FreelanceAvailabilityId",
                table: "WorkPreferences",
                column: "FreelanceAvailabilityId",
                principalTable: "FreelanceAvailabilities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkPreferences_FullTimeAvailabilities_FullTimeAvailabilityId",
                table: "WorkPreferences",
                column: "FullTimeAvailabilityId",
                principalTable: "FullTimeAvailabilities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
