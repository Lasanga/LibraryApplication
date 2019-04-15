using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Core.Permissions
{
    public static class AppPermissions
    {
        public static class BooksPermission
        {
            public const string Add = "books.add";
            public const string Edit = "books.edit";
            public const string Delete = "books.delete";
            public const string View = "books.view";
        }

        public static class NewspaperPermission
        {
            public const string Add = "newspaper.add";
            public const string Edit = "newspaper.edit";
            public const string Delete = "newspaper.delete";
            public const string View = "newspaper.view";
        }

        public static class OlaLeafPermission
        {
            public const string Add = "olaleaf.add";
            public const string Edit = "olaleaf.edit";
            public const string Delete = "olaleaf.delete";
            public const string View = "olaleaf.view";
        }

        public static class GovtPermission
        {
            public const string Add = "govt.add";
            public const string Edit = "govt.edit";
            public const string Delete = "govt.delete";
            public const string View = "govt.view";
        }

        public static class AuthorPermission
        {
            public const string Add = "author.add";
            public const string Edit = "author.edit";
            public const string Delete = "author.delete";
            public const string View = "author.view";
        }

        public static class CategoryPermission
        {
            public const string Add = "category.add";
            public const string Edit = "category.edit";
            public const string Delete = "category.delete";
            public const string View = "category.view";
        }

        public static class UserPermission
        {
            public const string AddUser = "user.add";
        }
    }
}
