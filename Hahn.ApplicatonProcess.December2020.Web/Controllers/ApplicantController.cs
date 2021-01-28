using Hahn.ApplicatonProcess.December2020.Data.DataContext;
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
using Swashbuckle.AspNetCore.Filters;
using Swashbuckle.AspNetCore.Annotations;
using Swashbuckle.AspNetCore.SwaggerGen;
using Microsoft.OpenApi.Models;
using Hahn.ApplicatonProcess.December2020.Domain.ResponseModels;
using Hahn.ApplicatonProcess.December2020.Web.Helpers;

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
            var result = await _service.GetApplicants();
            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                _logger.LogError($"Err: {result.Message}. ErrCode: {(int)result.MessageCode}");
                return BadRequest(result);
            }
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _service.GetApplicant(id);
            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                _logger.LogError($"Err: {result.Message}. ErrCode: {(int)result.MessageCode}");
                return BadRequest(result);
            }
        }
        #endregion
        #region PostMethods
        [HttpPost]
        // [Route("add")]
        public async Task<IActionResult> Post([FromBody] Applicant applicant)
        {
            if (ModelState.IsValid)
            {
                var result = await _service.AddApplicant(applicant);
                if (result.Success)
                {
                    return Created($"{Url.Action()}/{result.Data}", result);
                }
                else
                {
                    _logger.LogError($"Err: {result.Message}. ErrCode: {(int)result.MessageCode}");
                    return BadRequest(result);
                }
            }
            else
            {
                //invalid model state
                _logger.LogError($"Err: Validation Error. ErrCode: {(int)MessageCode.ValidationFailed}");
                return BadRequest(ControllerHelper.GetModelStateErrors(ModelState));
            }
        }
        #endregion
        #region PutMethods
        [HttpPut]
        // [Route("update")]
        public async Task<IActionResult> Put([FromBody] Applicant applicant)
        {

            if (ModelState.IsValid)
            {
                var result = await _service.UpdateApplicant(applicant);
                if (result.Success)
                {
                    return Ok(result);
                }
                else
                {
                    _logger.LogError($"Err: {result.Message}. ErrCode: {(int)result.MessageCode}");
                    return BadRequest(result);
                }
            }
            else
            {
                _logger.LogError($"Err: Validation Error. ErrCode: {(int)MessageCode.ValidationFailed}");
                return BadRequest(ControllerHelper.GetModelStateErrors(ModelState));
            }
        }
        #endregion
        #region DeleteMethods
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _service.DeleteApplicant(id);
            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                _logger.LogError($"Err: {result.Message}. ErrCode: {(int)result.MessageCode}");
                return BadRequest();
            }
        }
        #endregion
    }
}

