using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO
{
    public class ResponseBase
    {
        public int code { get; set; }
        public string message { get; set; }
    }
}
