using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.December2020.Domain.ResponseModels
{
    public class ApiResponse<T>
    {
        public string Message { get; set; }
        public byte MessageCode { get; set; }
        public bool Success { get; set; }
        public T Content { get; set; }
    }
}
