using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Core.Permissions
{
    public static class PolicyTypes
    {
        public static class AuthorPolicy
        {
            public const string Crud = "author.crud";
        }

        public static class CategoryPolicy
        {
            public const string Crud = "category.cru";
        }

        public static class BooksPolicy
        {
            public const string Cru = "book.cru";
            public const string View = "book.view";
            public const string delete = "book.delte";
        }

        public static class NewspaperPolicy
        {
            public const string Cru = "newspaper.cru";
            public const string View = "newspaper.view";
            public const string delete = "newspaper.delte";
        }

        public static class OlaLeafPolicy
        {
            public const string Cru = "olaleaf.cru";
            public const string View = "olaleaf.view";
            public const string delete = "olaleaf.delte";
        }

        public static class GovtPolicy
        {
            public const string Cru = "govt.cru";
            public const string View = "govt.view";
            public const string delete = "govt.delte";
        }

        public static class UserPolicy
        {
            public const string Manage = "user.manage";
        }

    }
}
