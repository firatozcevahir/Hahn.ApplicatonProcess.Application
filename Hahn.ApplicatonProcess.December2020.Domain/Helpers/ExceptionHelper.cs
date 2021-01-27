using Hahn.ApplicatonProcess.December2020.Domain.ResponseModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.December2020.Domain.Helpers
{
    public class ExceptionHelper
    {
        public static ApiResponse<T> GetExceptionApiResponse<T>(string message)
        {
            return new ApiResponse<T>
            {
                Message = $"Exception: {message}",
                Success = false,
                MessageCode = MessageCode.Exception
            };
        }
    }
}
