using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.December2020.Domain.ResponseModels
{
    public class BaseApiResponse
    {
        public string Message { get; set; }
        public MessageCode MessageCode { get; set; }
        public bool Success { get; set; }
    }
    public class ApiResponse<T>: BaseApiResponse
    {
        public T Data { get; set; }
    }


    public enum MessageCode
    {
        Exception,
        NotFound,
        AlreadyExists,

        GetSuccesful,
        CreateSuccessful,
        DeleteSuccesful,
        UpdateSuccesful,

        GetFailed,
        CreateFailed,
        DeleteFailed,
        UpdateFailed,
        ValidationFailed
    }
}
