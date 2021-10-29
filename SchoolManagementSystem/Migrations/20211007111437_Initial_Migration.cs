using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SchoolManagementSystem.Migrations
{
    public partial class Initial_Migration : Migration
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
                    F_Name = table.Column<string>(nullable: true),
                    L_Name = table.Column<string>(nullable: true),
                    E_Mail = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    D_O_B = table.Column<string>(nullable: true),
                    Contact_No = table.Column<string>(nullable: true),
                    Role = table.Column<string>(nullable: true),
                    IsVerified = table.Column<bool>(nullable: false),
                    otp = table.Column<string>(nullable: true),
                    OtpGenerate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Registeration_tbl", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "StudenTeacher_tbl",
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
                    F_Name = table.Column<string>(nullable: false),
                    L_Name = table.Column<string>(nullable: false),
                    Father_Name = table.Column<string>(nullable: false),
                    D_O_B = table.Column<string>(nullable: false),
                    ADDRESS = table.Column<string>(nullable: false),
                    E_Mail = table.Column<string>(nullable: false),
                    Contact_No = table.Column<string>(nullable: false),
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
                    table.PrimaryKey("PK_StudenTeacher_tbl", x => x.ID);
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
                    F_Name = table.Column<string>(nullable: false),
                    L_Name = table.Column<string>(nullable: false),
                    D_O_B = table.Column<string>(nullable: false),
                    Age = table.Column<string>(nullable: false),
                    Gender = table.Column<string>(nullable: false),
                    E_Mail = table.Column<string>(nullable: false),
                    Contact_No = table.Column<string>(nullable: false),
                    ADDRESS = table.Column<string>(nullable: false),
                    Cast = table.Column<string>(nullable: false),
                    Religion = table.Column<string>(nullable: false),
                    Nationality = table.Column<string>(nullable: false),
                    Maritial_Status = table.Column<string>(nullable: false),
                    Qualification = table.Column<string>(nullable: false),
                    Subjects_You_Can_Teach = table.Column<string>(nullable: false),
                    Experience_Of_Teaching = table.Column<string>(nullable: false),
                    Classes_You_Will_Teach = table.Column<string>(nullable: true),
                    Your_Periods = table.Column<string>(nullable: true),
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
                name: "StudenTeacher_tbl");

            migrationBuilder.DropTable(
                name: "Teacher_tbl");
        }
    }
}
