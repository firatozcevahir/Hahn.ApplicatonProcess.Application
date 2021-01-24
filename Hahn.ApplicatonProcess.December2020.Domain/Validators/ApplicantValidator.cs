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
            RuleFor(a => a.Name)
                .Must(n => n.Length >= 5).WithMessage("data.errors.name_greater_than|5");
            RuleFor(a => a.FamilyName)
                .Must(fn => fn.Length >= 5)
                .WithMessage("data.errors.familyname_greater_than|5");
            RuleFor(a => a.Address)
                .Must(a => a.Length >= 10)
                .WithMessage("data.errors.address_greater_than|10");
            RuleFor(a => a.Age)
                .GreaterThanOrEqualTo(20)
                .WithMessage("data.errors.age_between|20-60")
                .LessThanOrEqualTo(60)
                .WithMessage("data.errors.age_between|20-60");
            RuleFor(a => a.EmailAddress)
                .Matches(@"^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$").WithMessage("data.errors.invalid_email_address");
            RuleFor(a => a.CountryOfOrigin)
                .Must(a => a.Length >= 2).WithMessage("data.errors.country_greater_than|2")
                .MustAsync(async (c, cancellationToken) =>
            {
                using var client = new HttpClient();
                var result = await client.GetAsync($"https://restcountries.eu/rest/v2/name/{c}?fullText=true", cancellationToken);

                return result.StatusCode == HttpStatusCode.OK;
            }).WithMessage("data.errors.invalid_country");

        }


    }
}
