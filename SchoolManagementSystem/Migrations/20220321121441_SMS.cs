using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SchoolManagementSystem.Migrations
{
    public partial class SMS : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Registeration_tbl",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: false),
                    Created_DateTime = table.Column<DateTime>(nullable: false),
                    ModifiedBy = table.Column<string>(nullable: true),
                    Modified_DateTime = table.Column<DateTime>(nullable: true),
                    DeletedBy = table.Column<string>(nullable: true),
                    Deleted_DateTime = table.Column<DateTime>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    PasswordHash = table.Column<byte[]>(nullable: true),
                    PasswordSalt = table.Column<byte[]>(nullable: true),
                    DOB = table.Column<string>(nullable: true),
                    ContactNo = table.Column<string>(nullable: true),
                    Role = table.Column<string>(nullable: true),
                    IsVerified = table.Column<bool>(nullable: false),
                    otp = table.Column<string>(nullable: true),
                    OtpGenerateDateTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Registeration_tbl", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Student_tbl",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: false),
                    Created_DateTime = table.Column<DateTime>(nullable: false),
                    ModifiedBy = table.Column<string>(nullable: true),
                    Modified_DateTime = table.Column<DateTime>(nullable: true),
                    DeletedBy = table.Column<string>(nullable: true),
                    Deleted_DateTime = table.Column<DateTime>(nullable: true),
                    FirstName = table.Column<string>(nullable: false),
                    LastName = table.Column<string>(nullable: false),
                    FathersName = table.Column<string>(nullable: false),
                    DOB = table.Column<string>(nullable: false),
                    ADDRESS = table.Column<string>(nullable: false),
                    Email = table.Column<string>(nullable: false),
                    ContactNo = table.Column<string>(nullable: false),
                    Gender = table.Column<string>(nullable: false),
                    Cast = table.Column<string>(nullable: false),
                    Religion = table.Column<string>(nullable: false),
                    Nationality = table.Column<string>(nullable: false),
                    City = table.Column<string>(nullable: false),
                    Pincode = table.Column<string>(nullable: false),
                    State = table.Column<string>(nullable: false),
                    Class = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Student_tbl", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Teacher_tbl",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IsActive = table.Column<bool>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: false),
                    Created_DateTime = table.Column<DateTime>(nullable: false),
                    ModifiedBy = table.Column<string>(nullable: true),
                    Modified_DateTime = table.Column<DateTime>(nullable: true),
                    DeletedBy = table.Column<string>(nullable: true),
                    Deleted_DateTime = table.Column<DateTime>(nullable: true),
                    FirstName = table.Column<string>(nullable: false),
                    LastName = table.Column<string>(nullable: false),
                    DOB = table.Column<string>(nullable: false),
                    Age = table.Column<string>(nullable: false),
                    Gender = table.Column<string>(nullable: false),
                    Email = table.Column<string>(nullable: false),
                    ContactNo = table.Column<string>(nullable: false),
                    ADDRESS = table.Column<string>(nullable: false),
                    Cast = table.Column<string>(nullable: false),
                    Religion = table.Column<string>(nullable: false),
                    Nationality = table.Column<string>(nullable: false),
                    MaritialStatus = table.Column<string>(nullable: false),
                    Qualification = table.Column<string>(nullable: false),
                    SubjectsYouCanTeach = table.Column<string>(nullable: false),
                    ExperienceOfTeaching = table.Column<string>(nullable: false),
                    ClassesYouWillTeach = table.Column<string>(nullable: true),
                    YourPeriods = table.Column<string>(nullable: true),
                    Approved = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teacher_tbl", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Registeration_tbl");

            migrationBuilder.DropTable(
                name: "Student_tbl");

            migrationBuilder.DropTable(
                name: "Teacher_tbl");
        }
    }
}
