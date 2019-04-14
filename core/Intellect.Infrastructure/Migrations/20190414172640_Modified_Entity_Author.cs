using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Intellect.Infrastructure.Migrations
{
    public partial class Modified_Entity_Author : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
             migrationBuilder.DropColumn(
             name: "Age",
             table: "Authors");

            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "Authors",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Age",
                table: "Authors",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }
    }
}
