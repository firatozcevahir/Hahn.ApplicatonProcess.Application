using Hahn.ApplicatonProcess.December2020.Domain.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.December2020.Web.Controllers
{
    [Produces("application/json")]
    [Route("app")]
    [EnableCors("corsPolicy")]
    public class ApplicantController : Controller
    {
        [HttpPost]
        [Route("create-applicant")]
        public IActionResult Post([FromBody]Applicant applicant)
        {
            return Ok(new { id = applicant.ID, Success = true, MessageCode = 0, Message = string.Empty });
        }

        [HttpGet]
        [Route("get-applicant")]
        public IActionResult Get(int id)
        {
            return Ok("test");
        }
    }
}
