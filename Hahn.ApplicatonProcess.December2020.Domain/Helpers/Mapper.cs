using Hahn.ApplicatonProcess.December2020.Data.Entities;
using Hahn.ApplicatonProcess.December2020.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.December2020.Domain.Helpers
{
    public class Mapper
    {
        #region EntityToDto
        public static IList<Applicant> MapEntityToDto(IList<ApplicantEntity> applicants)
        {
            var applicantList = new List<Applicant>();
            if (applicants == null)
            {
                return applicantList;
            }

            foreach (var applicant in applicants)
            {
                applicantList.Add(new Applicant
                {
                    ID = applicant.ID,
                    Address = applicant.Address,
                    Age = applicant.Age,
                    CountryOfOrigin = applicant.CountryOfOrigin,
                    EmailAddress = applicant.EmailAddress,
                    FamilyName = applicant.FamilyName,
                    Hired = applicant.Hired,
                    Name = applicant.Name
                });
            }

            return applicantList;
        }
        public static Applicant MapEntityToDto(ApplicantEntity applicant)
        {
            if(applicant == null)
            {
                return null;
            }

            return new Applicant
            {
                ID = applicant.ID,
                Address = applicant.Address,
                Age = applicant.Age,
                CountryOfOrigin = applicant.CountryOfOrigin,
                EmailAddress = applicant.EmailAddress,
                FamilyName = applicant.FamilyName,
                Hired = applicant.Hired,
                Name = applicant.Name
            };
        }
        #endregion

        #region DtoToEntity
        public static ApplicantEntity MapDtoToEntity(Applicant applicant)
        {
            if(applicant == null)
            {
                return null;
            }
            return new ApplicantEntity
            {
                ID = applicant.ID,
                Address = applicant.Address,
                Age = applicant.Age,
                CountryOfOrigin = applicant.CountryOfOrigin,
                EmailAddress = applicant.EmailAddress,
                FamilyName = applicant.FamilyName,
                Hired = applicant.Hired,
                Name = applicant.Name
            };
        }
        #endregion
    }
}
