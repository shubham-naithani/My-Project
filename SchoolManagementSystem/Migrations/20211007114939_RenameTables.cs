using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SchoolManagementSystem.Migrations
{
    public partial class RenameTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_StudenTeacher_tbl",
                table: "StudenTeacher_tbl");

            migrationBuilder.DropColumn(
                name: "Classes_You_Will_Teach",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "Contact_No",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "D_O_B",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "E_Mail",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "Experience_Of_Teaching",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "F_Name",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "L_Name",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "Maritial_Status",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "Subjects_You_Can_Teach",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "Your_Periods",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "Contact_No",
                table: "Registeration_tbl");

            migrationBuilder.DropColumn(
                name: "D_O_B",
                table: "Registeration_tbl");

            migrationBuilder.DropColumn(
                name: "E_Mail",
                table: "Registeration_tbl");

            migrationBuilder.DropColumn(
                name: "F_Name",
                table: "Registeration_tbl");

            migrationBuilder.DropColumn(
                name: "L_Name",
                table: "Registeration_tbl");

            migrationBuilder.DropColumn(
                name: "OtpGenerate",
                table: "Registeration_tbl");

            migrationBuilder.DropColumn(
                name: "Contact_No",
                table: "StudenTeacher_tbl");

            migrationBuilder.DropColumn(
                name: "D_O_B",
                table: "StudenTeacher_tbl");

            migrationBuilder.DropColumn(
                name: "E_Mail",
                table: "StudenTeacher_tbl");

            migrationBuilder.DropColumn(
                name: "F_Name",
                table: "StudenTeacher_tbl");

            migrationBuilder.DropColumn(
                name: "Father_Name",
                table: "StudenTeacher_tbl");

            migrationBuilder.DropColumn(
                name: "L_Name",
                table: "StudenTeacher_tbl");

            migrationBuilder.RenameTable(
                name: "StudenTeacher_tbl",
                newName: "Student_tbl");

            migrationBuilder.AddColumn<string>(
                name: "ClassesYouWillTeach",
                table: "Teacher_tbl",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ContactNo",
                table: "Teacher_tbl",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DOB",
                table: "Teacher_tbl",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Teacher_tbl",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ExperienceOfTeaching",
                table: "Teacher_tbl",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Teacher_tbl",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Teacher_tbl",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "MaritialStatus",
                table: "Teacher_tbl",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SubjectsYouCanTeach",
                table: "Teacher_tbl",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "YourPeriods",
                table: "Teacher_tbl",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ContactNo",
                table: "Registeration_tbl",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DOB",
                table: "Registeration_tbl",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Registeration_tbl",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Registeration_tbl",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Registeration_tbl",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "OtpGenerateDateTime",
                table: "Registeration_tbl",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "ContactNo",
                table: "Student_tbl",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DOB",
                table: "Student_tbl",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Student_tbl",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FathersName",
                table: "Student_tbl",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Student_tbl",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Student_tbl",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Student_tbl",
                table: "Student_tbl",
                column: "ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Student_tbl",
                table: "Student_tbl");

            migrationBuilder.DropColumn(
                name: "ClassesYouWillTeach",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "ContactNo",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "DOB",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "ExperienceOfTeaching",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "MaritialStatus",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "SubjectsYouCanTeach",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "YourPeriods",
                table: "Teacher_tbl");

            migrationBuilder.DropColumn(
                name: "ContactNo",
                table: "Registeration_tbl");

            migrationBuilder.DropColumn(
                name: "DOB",
                table: "Registeration_tbl");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Registeration_tbl");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Registeration_tbl");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Registeration_tbl");

            migrationBuilder.DropColumn(
                name: "OtpGenerateDateTime",
                table: "Registeration_tbl");

            migrationBuilder.DropColumn(
                name: "ContactNo",
                table: "Student_tbl");

            migrationBuilder.DropColumn(
                name: "DOB",
                table: "Student_tbl");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Student_tbl");

            migrationBuilder.DropColumn(
                name: "FathersName",
                table: "Student_tbl");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Student_tbl");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Student_tbl");

            migrationBuilder.RenameTable(
                name: "Student_tbl",
                newName: "StudenTeacher_tbl");

            migrationBuilder.AddColumn<string>(
                name: "Classes_You_Will_Teach",
                table: "Teacher_tbl",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Contact_No",
                table: "Teacher_tbl",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "D_O_B",
                table: "Teacher_tbl",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "E_Mail",
                table: "Teacher_tbl",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Experience_Of_Teaching",
                table: "Teacher_tbl",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "F_Name",
                table: "Teacher_tbl",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "L_Name",
                table: "Teacher_tbl",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Maritial_Status",
                table: "Teacher_tbl",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Subjects_You_Can_Teach",
                table: "Teacher_tbl",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Your_Periods",
                table: "Teacher_tbl",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Contact_No",
                table: "Registeration_tbl",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "D_O_B",
                table: "Registeration_tbl",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "E_Mail",
                table: "Registeration_tbl",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "F_Name",
                table: "Registeration_tbl",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "L_Name",
                table: "Registeration_tbl",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "OtpGenerate",
                table: "Registeration_tbl",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Contact_No",
                table: "StudenTeacher_tbl",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "D_O_B",
                table: "StudenTeacher_tbl",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "E_Mail",
                table: "StudenTeacher_tbl",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "F_Name",
                table: "StudenTeacher_tbl",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Father_Name",
                table: "StudenTeacher_tbl",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "L_Name",
                table: "StudenTeacher_tbl",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_StudenTeacher_tbl",
                table: "StudenTeacher_tbl",
                column: "ID");
        }
    }
}
