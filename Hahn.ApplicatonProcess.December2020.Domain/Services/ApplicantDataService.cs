using Hahn.ApplicatonProcess.December2020.Data.DataContext;
using Hahn.ApplicatonProcess.December2020.Domain.Interfaces;
using Hahn.ApplicatonProcess.December2020.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Hahn.ApplicatonProcess.December2020.Domain.Helpers;
using System.Threading.Tasks;
using Hahn.ApplicatonProcess.December2020.Domain.ResponseModels;
using Microsoft.EntityFrameworkCore;

namespace Hahn.ApplicatonProcess.December2020.Domain.DataService
{
    public class ApplicantDataService : IApplicantDataService
    {
        private readonly ApplicationDbContext _context;
        public ApplicantDataService(
            ApplicationDbContext context
            )
        {
            _context = context;
        }

        public async Task<ApiResponse<Applicant>> GetApplicant(int id)
        {
            if (!EntityExists(id))
            {
                return new ApiResponse<Applicant>
                {
                    Message = $"Applicant with ID of {id} Doesn't Exist",
                    Success = false,
                };
            }

            try
            {
                var content = await _context.ApplicantsEntity.FirstOrDefaultAsync(a => a.ID == id);
                return new ApiResponse<Applicant>
                {
                    Success = true,
                    Data = Mapper.MapEntityToDto(content)
                };
            }
            catch (Exception ex)
            {
                return GetExceptionApiResponse<Applicant>(ex.Message);
            }
        }

        public async Task<ApiResponse<IList<Applicant>>> GetApplicants()
        {
            try
            {
                var content = Mapper.MapEntityToDto(await _context.ApplicantsEntity.ToListAsync());
                return new ApiResponse<IList<Applicant>>
                {
                    Success = true,
                    Data = content
                };
            }
            catch (Exception ex)
            {
                return GetExceptionApiResponse<IList<Applicant>>(ex.Message);
            }
        }

        public async Task<ApiResponse<int>> AddApplicant(Applicant applicant)
        {
            if (EntityExists(applicant.ID))
            {
                return new ApiResponse<int>
                {
                    Message = $"ID {applicant.ID} Already Exists",
                    Success = false
                };
            }
            try
            {
                var entity = Mapper.MapDtoToEntity(applicant);
                _context.ApplicantsEntity.Add(entity);
                var result = await _context.SaveChangesAsync();
                if (result > 0)
                {
                    return new ApiResponse<int>
                    {
                        Message = $"Successfully Created",
                        Success = true,
                        Data = entity.ID
                    };
                }
                else
                {
                    return new ApiResponse<int>
                    {
                        Message = $"Failed to Create Applicant",
                        Success = false
                    };
                }
            }
            catch (Exception ex)
            {
                return GetExceptionApiResponse<int>(ex.Message);
            }
        }

        public async Task<ApiResponse<int>> UpdateApplicant(Applicant applicant)
        {
            if (!EntityExists(applicant.ID))
            {
                return new ApiResponse<int>
                {
                    Message = $"Applicant with ID of {applicant.ID} Doesn't Exist",
                    Success = false,
                    Data = applicant.ID
                };
            }

            try
            {
                var entity = await _context.ApplicantsEntity.FirstOrDefaultAsync(a => a.ID == applicant.ID);
                entity.Address = applicant.Address;
                entity.Age = applicant.Age;
                entity.CountryOfOrigin = applicant.CountryOfOrigin;
                entity.EmailAddress = applicant.EmailAddress;
                entity.FamilyName = applicant.FamilyName;
                entity.Hired = applicant.Hired;
                entity.Name = applicant.Name;
                _context.Update(entity);               
                var result = await _context.SaveChangesAsync();
                if(result > 0)
                {
                    return new ApiResponse<int>
                    {
                        Message = $"Successfully Updated",
                        Success = true,
                        Data = applicant.ID
                    };
                }
                else
                {
                    return new ApiResponse<int>
                    {
                        Message = $"An Error occured while updating",
                        Success = false,
                        Data = 0
                    };
                }
            }
            catch (Exception ex)
            {
                return new ApiResponse<int>
                {
                    Message = $"Exception: {ex.Message}",
                    Success = false,
                    Data = 0
                };
            }
        }


        public async Task<ApiResponse<int>> DeleteApplicant(int id)
        {
            if (!EntityExists(id))
            {
                return new ApiResponse<int>
                {
                    Message = $"ID {id} Does not Exist",
                    Success = false,
                    Data = id
                };
            }

            try
            {
                var entity = await _context.ApplicantsEntity.FirstOrDefaultAsync(a => a.ID == id);
                _context.ApplicantsEntity.Remove(entity);
                var result = await _context.SaveChangesAsync();
                if (result > 0)
                {
                    return new ApiResponse<int>
                    {
                        Message = $"Successfully Deleted",
                        Success = true,
                        Data = id
                    };
                }
                else
                {
                    return new ApiResponse<int>
                    {
                        Message = $"An Error occured while Deleting",
                        Success = false,
                        Data = id
                    };
                }
            }
            catch (Exception ex)
            {
                return GetExceptionApiResponse<int>(ex.Message);
            }

        }

        private bool EntityExists(int id)
        {
            return _context.ApplicantsEntity.Any(e => e.ID == id);
        }

        private ApiResponse<T> GetExceptionApiResponse<T>(string message)
        {
            return new ApiResponse<T>
            {
                Message = $"Exception: {message}",
                Success = false
            };
        }
    }
}
