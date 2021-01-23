﻿using Hahn.ApplicatonProcess.December2020.Data.DataContext;
using Hahn.ApplicatonProcess.December2020.Domain.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Linq;
using Hahn.ApplicatonProcess.December2020.Domain.DataService;
using Hahn.ApplicatonProcess.December2020.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Hahn.ApplicatonProcess.December2020.Web.Controllers
{
    [Produces("application/json")]
    [Route("app/applicant")]
    [EnableCors("corsPolicy")]
    [ApiController]
    public class ApplicantController : BaseController
    {
        private readonly ILogger<ApplicantController> _logger;
        private readonly IApplicantDataService _service;
        public ApplicantController(
            ILogger<ApplicantController> logger,
            IApplicantDataService service
            )
        {
            _service = service;
            _logger = logger;
        }

        #region GetMethods

        [HttpGet]
        // [Route("get")]
        public async Task<IActionResult> Get()
        {
            // TODO: HANDLE LOGS
            var result = await _service.GetApplicants();
            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            // TODO: HANDLE LOGS
            var result = await _service.GetApplicant(id);
            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                _logger.LogWarning($"Err: {result.Message}. ErrCode: {result.MessageCode}");
                return BadRequest();
            }
        }
        #endregion
        #region PostMethods
        [HttpPost]
        // [Route("add")]
        public async Task<IActionResult> Post([FromBody] Applicant applicant)
        {
            // TODO: HANDLE LOGS
            if (ModelState.IsValid)
            {
                var result = await _service.AddApplicant(applicant);
                if (result.Success)
                {
                    return Created($"get-applicant/{result.Data}", result);
                }
                else
                {
                    return BadRequest();
                }
            }
            else
            {
                //invalid model state
                return BadRequest();
            }
        }
        #endregion
        #region PutMethods
        [HttpPut]
        // [Route("update")]
        public async Task<IActionResult> Put([FromBody] Applicant applicant)
        {
            // TODO: HANDLE LOGS
            if (ModelState.IsValid)
            {
                var result = await _service.UpdateApplicant(applicant);
                if (result.Success)
                {
                    return Ok(result);
                }
                else
                {
                    return BadRequest();
                }
            }
            else
            {
                return BadRequest();
            }
        }
        #endregion
        #region DeleteMethods
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            // TODO: HANDLE LOGS
            var result = await _service.DeleteApplicant(id);
            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest();
            }
        }
        #endregion
    }
}
