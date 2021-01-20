using FluentValidation;
using Hahn.ApplicatonProcess.December2020.Domain.Models;

namespace Hahn.ApplicatonProcess.December2020.Domain.Validators
{
    public class ApplicantValidator : AbstractValidator<Applicant>
    {
        public ApplicantValidator()
        {
            // TODO:  IMPLEMENT Validations
            RuleFor(a => a.Name).Must(n => n.Length >= 5).WithMessage("Test Message Validation Fail");
        }
    }
}
