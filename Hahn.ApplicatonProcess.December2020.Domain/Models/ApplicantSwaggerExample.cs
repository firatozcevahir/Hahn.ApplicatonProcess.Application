

using Swashbuckle.AspNetCore.Filters;

namespace Hahn.ApplicatonProcess.December2020.Domain.Models
{
    public class ApplicantSwaggerExample: IExamplesProvider<Applicant>
    {
        Applicant IExamplesProvider<Applicant>.GetExamples()
        {
            return new Applicant
            {
                ID = 0,
                Address = "Istanbul/Turkey",
                Age = 28,
                CountryOfOrigin = "Turkey",
                EmailAddress = "firat.ozcevahir@gmail.com",
                FamilyName = "Ozcevahir",
                Name = "Yusuf Firat",
                Hired = true
            };
        }
    }
}
