﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Core.Models.Authors.Dtos
{
    public class AuthorUpdateDto
    {
        public int Id { get; set; }

        public string DisplayName { get; set; }

        public int? Age { get; set; }

        public string EmailAddress { get; set; }
    }
}
