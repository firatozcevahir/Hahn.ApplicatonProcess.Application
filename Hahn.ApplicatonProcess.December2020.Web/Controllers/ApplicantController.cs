using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.December2020.Web.Controllers
{
    public class ApplicantController : ControllerBase
    {
        [HttpPost]
        [Route("")]
        public IActionResult Post()
        {
            return Created("",null);
        }

        [HttpGet]
        public IActionResult Get(int id)
        {
            return Ok(null);
        }
    }
}
