using Hahn.ApplicatonProcess.December2020.Domain.ResponseModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.December2020.Web.Controllers
{
    public class BaseController : Controller
    {
        protected ApiResponse<IList<ModelError>> GetModelStateErrors()
        {
            return new ApiResponse<IList<ModelError>>
            {
                Success = false,
                Message = "Validation Errors",
                Content = ModelState.Values.SelectMany(v => v.Errors).ToList()
            };
        }
    }
}
