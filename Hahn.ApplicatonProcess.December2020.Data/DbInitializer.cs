using Hahn.ApplicatonProcess.December2020.Data.DataContext;
using Hahn.ApplicatonProcess.December2020.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hahn.ApplicatonProcess.December2020.Data
{
    public class DbInitializer
    {
        public static bool Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ApplicationDbContext(
           serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>()))
            {
                if (context.ApplicantsEntity.Any())
                {
                    return true;   // has data already
                }
                var dataList = new List<ApplicantEntity>
                {
                    new ApplicantEntity { Address = "Entity 1 Address", Age = 25, CountryOfOrigin = "Turkey", EmailAddress = "test@test.com", FamilyName = "TestFamilyName", Hired = false, Name = "TestName" },
                    new ApplicantEntity { Address = "Entity 2 Address", Age = 45, CountryOfOrigin = "Turkey", EmailAddress = "test@test.com", FamilyName = "TestFamilyName", Hired = false, Name = "TestName" },
                    new ApplicantEntity { Address = "Entity 3 Address", Age = 37, CountryOfOrigin = "Turkey", EmailAddress = "test@test.com", FamilyName = "TestFamilyName", Hired = false, Name = "TestName" }
                };

                context.ApplicantsEntity.AddRange(dataList);
                return context.SaveChanges() > 0; //successfully added entities
            }
        }
    }
}
