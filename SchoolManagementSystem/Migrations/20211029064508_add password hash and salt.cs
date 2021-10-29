using Microsoft.EntityFrameworkCore.Migrations;

namespace SchoolManagementSystem.Migrations
{
    public partial class addpasswordhashandsalt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Password",
                table: "Registeration_tbl");

            migrationBuilder.AddColumn<string>(
                name: "PasswordHash",
                table: "Registeration_tbl",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PasswordSalt",
                table: "Registeration_tbl",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PasswordHash",
                table: "Registeration_tbl");

            migrationBuilder.DropColumn(
                name: "PasswordSalt",
                table: "Registeration_tbl");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Registeration_tbl",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
