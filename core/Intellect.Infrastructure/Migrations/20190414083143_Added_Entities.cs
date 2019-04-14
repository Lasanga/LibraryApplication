using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Intellect.Infrastructure.Migrations
{
    public partial class Added_Entities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Authors",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IsDeleted = table.Column<bool>(nullable: false),
                    DeleterUserId = table.Column<int>(nullable: false),
                    DeletedTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<int>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    LastModificationDate = table.Column<DateTime>(nullable: false),
                    LastModifierUser = table.Column<int>(nullable: false),
                    DisplayName = table.Column<string>(maxLength: 24, nullable: false),
                    Age = table.Column<DateTime>(nullable: false),
                    EmailAddress = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Authors", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IsDeleted = table.Column<bool>(nullable: false),
                    DeleterUserId = table.Column<int>(nullable: false),
                    DeletedTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<int>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    LastModificationDate = table.Column<DateTime>(nullable: false),
                    LastModifierUser = table.Column<int>(nullable: false),
                    DisplayName = table.Column<string>(maxLength: 24, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IsDeleted = table.Column<bool>(nullable: false),
                    DeleterUserId = table.Column<int>(nullable: false),
                    DeletedTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<int>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    LastModificationDate = table.Column<DateTime>(nullable: false),
                    LastModifierUser = table.Column<int>(nullable: false),
                    DisplayName = table.Column<string>(maxLength: 24, nullable: false),
                    Publisher = table.Column<string>(nullable: true),
                    Year = table.Column<DateTime>(nullable: false),
                    Price = table.Column<int>(nullable: false),
                    SourceType = table.Column<int>(nullable: false),
                    AuthorId = table.Column<int>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false),
                    IsbnNumber = table.Column<string>(nullable: false),
                    TotalPages = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Books_Authors_AuthorId",
                        column: x => x.AuthorId,
                        principalTable: "Authors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Books_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GovtPublications",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IsDeleted = table.Column<bool>(nullable: false),
                    DeleterUserId = table.Column<int>(nullable: false),
                    DeletedTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<int>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    LastModificationDate = table.Column<DateTime>(nullable: false),
                    LastModifierUser = table.Column<int>(nullable: false),
                    DisplayName = table.Column<string>(maxLength: 24, nullable: false),
                    Publisher = table.Column<string>(nullable: true),
                    Year = table.Column<DateTime>(nullable: false),
                    Price = table.Column<int>(nullable: false),
                    SourceType = table.Column<int>(nullable: false),
                    AuthorId = table.Column<int>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false),
                    TotalPages = table.Column<int>(nullable: false),
                    Sector = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GovtPublications", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GovtPublications_Authors_AuthorId",
                        column: x => x.AuthorId,
                        principalTable: "Authors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GovtPublications_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "NewsPapers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IsDeleted = table.Column<bool>(nullable: false),
                    DeleterUserId = table.Column<int>(nullable: false),
                    DeletedTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<int>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    LastModificationDate = table.Column<DateTime>(nullable: false),
                    LastModifierUser = table.Column<int>(nullable: false),
                    DisplayName = table.Column<string>(maxLength: 24, nullable: false),
                    Publisher = table.Column<string>(nullable: true),
                    Year = table.Column<DateTime>(nullable: false),
                    Price = table.Column<int>(nullable: false),
                    SourceType = table.Column<int>(nullable: false),
                    AuthorId = table.Column<int>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false),
                    PublicationDate = table.Column<DateTime>(nullable: false),
                    TotalSubParts = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewsPapers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_NewsPapers_Authors_AuthorId",
                        column: x => x.AuthorId,
                        principalTable: "Authors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_NewsPapers_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OlaLeaves",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IsDeleted = table.Column<bool>(nullable: false),
                    DeleterUserId = table.Column<int>(nullable: false),
                    DeletedTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<int>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    LastModificationDate = table.Column<DateTime>(nullable: false),
                    LastModifierUser = table.Column<int>(nullable: false),
                    DisplayName = table.Column<string>(maxLength: 24, nullable: false),
                    Publisher = table.Column<string>(nullable: true),
                    Year = table.Column<DateTime>(nullable: false),
                    Price = table.Column<int>(nullable: false),
                    SourceType = table.Column<int>(nullable: false),
                    AuthorId = table.Column<int>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OlaLeaves", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OlaLeaves_Authors_AuthorId",
                        column: x => x.AuthorId,
                        principalTable: "Authors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OlaLeaves_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Books_AuthorId",
                table: "Books",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_Books_CategoryId",
                table: "Books",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_GovtPublications_AuthorId",
                table: "GovtPublications",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_GovtPublications_CategoryId",
                table: "GovtPublications",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_NewsPapers_AuthorId",
                table: "NewsPapers",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_NewsPapers_CategoryId",
                table: "NewsPapers",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_OlaLeaves_AuthorId",
                table: "OlaLeaves",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_OlaLeaves_CategoryId",
                table: "OlaLeaves",
                column: "CategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Books");

            migrationBuilder.DropTable(
                name: "GovtPublications");

            migrationBuilder.DropTable(
                name: "NewsPapers");

            migrationBuilder.DropTable(
                name: "OlaLeaves");

            migrationBuilder.DropTable(
                name: "Authors");

            migrationBuilder.DropTable(
                name: "Categories");
        }
    }
}
