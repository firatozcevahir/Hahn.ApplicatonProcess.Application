using FluentValidation;
using Hahn.ApplicatonProcess.December2020.Domain.Models;
using System.Net.Http;
using System.Net;

namespace Hahn.ApplicatonProcess.December2020.Domain.Validators
{
    public class ApplicantValidator : AbstractValidator<Applicant>
    {
        public ApplicantValidator()
        {
            RuleFor(a => a.Name).Must(n => n.Length >= 5).WithMessage("Name must be greater than 5");
            RuleFor(a => a.FamilyName).Must(fn => fn.Length >= 5).WithMessage("Family Name must be greater than 5");
            RuleFor(a => a.Address).Must(a => a.Length >= 10).WithMessage("Address must be greater than 10");
            RuleFor(a => a.Age).GreaterThanOrEqualTo(20).LessThanOrEqualTo(60);
            RuleFor(a => a.EmailAddress).EmailAddress();
            RuleFor(a => a.CountryOfOrigin).MustAsync(async (c, cancellationToken) =>
            {
                using var client = new HttpClient();
                var result = await client.GetAsync($"https://restcountries.eu/rest/v2/name/{c}?fullText=true");

                return result.StatusCode == HttpStatusCode.OK;
            }).WithMessage($"Provided country is not valid");
        }
    }
}
