using Hahn.ApplicatonProcess.December2020.Domain.ResponseModels;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.December2020.Web.Helpers
{
    public class ControllerHelper
    {
        public static ApiResponse<IList<string>> GetModelStateErrors(ModelStateDictionary modelState)
        {
            var errors = modelState.Values.SelectMany(state => state.Errors).Select(s => s.ErrorMessage).ToList();
            return new()
            {
                MessageCode = MessageCode.ValidationFailed,
                Success = false,
                Message = "data.validation_error",
                Data = errors
            };
        }
    }
}
