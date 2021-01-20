using Hahn.ApplicatonProcess.December2020.Domain.Models;
using Hahn.ApplicatonProcess.December2020.Domain.ResponseModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.December2020.Domain.Interfaces
{
    public interface IApplicantDataService
    {
        Task<ApiResponse<IList<Applicant>>> GetApplicants();
        Task<ApiResponse<Applicant>> GetApplicant(int id);
        Task<ApiResponse<int>> AddApplicant(Applicant applicant);
        Task<ApiResponse<int>> UpdateApplicant(Applicant applicant);
        Task<ApiResponse<int>> DeleteApplicant(int id);
    }
}
