using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Figgle;
using Microsoft.OpenApi.Models;
using Hahn.ApplicatonProcess.December2020.Data.DataContext;
using Microsoft.EntityFrameworkCore;
using Hahn.ApplicatonProcess.December2020.Data.Helpers;
using System;
using Hahn.ApplicatonProcess.December2020.Data;
using Hahn.ApplicatonProcess.December2020.Domain.Interfaces;
using Hahn.ApplicatonProcess.December2020.Domain.DataService;
using Serilog;
using FluentValidation.AspNetCore;
using FluentValidation;
using Hahn.ApplicatonProcess.December2020.Domain.Models;
using Hahn.ApplicatonProcess.December2020.Domain.Validators;

namespace Hahn.ApplicatonProcess.December2020.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddLogging(builder =>
            {
                var filename = Configuration.GetSection("logger:filename").Value;
                var serilogLogger = new LoggerConfiguration()
                .WriteTo.File($"logs/{filename}.txt", rollingInterval: RollingInterval.Day)
                .CreateLogger();
                builder.AddSerilog(serilogLogger, true);
            });

            //fluent validation integration
            services
                .AddMvc()
                .AddFluentValidation();

            services.AddCors(options =>
            {
                options.AddPolicy("corsPolicy",
                         builder => builder
                              .WithOrigins("*").SetIsOriginAllowedToAllowWildcardSubdomains()
                              .AllowAnyHeader()
                              .AllowAnyOrigin()
                              .AllowAnyMethod()
                 );
            });

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "wwwroot";
            });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "My API",
                    Description = "My First ASP.NET Core Web API"
                });
            });

            services.AddDbContext<ApplicationDbContext>(options =>
            {
                var dbtype = Configuration.GetSection("app:dbType").Value;
                var connectionstring = Configuration.GetSection("app:connectionString").Value;

                if (dbtype.Equals(nameof(DbTypes.InMemory), StringComparison.OrdinalIgnoreCase))
                {
                    options.UseInMemoryDatabase(connectionstring);
                }
                else
                {
                    //handle other db types
                }
            });


            //Add DI services
            services.AddScoped<IApplicantDataService, ApplicantDataService>();
            services.AddTransient<IValidator<Applicant>, ApplicantValidator>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseStaticFiles();
            app.UseDefaultFiles();
            app.UseRouting();
            app.UseAuthentication();
            app.UseCors("corsPolicy");
            app.UseAuthorization();
            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            var scopeFactory = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>();
            using (var scope = scopeFactory.CreateScope())
            {
                var services = scope.ServiceProvider;
                var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                // Init Db with example data
                var result = DbInitializer.Initialize(services);
                if (!result)
                {
                }
            }

            app.UseSpa(spa =>
            {

                if (env.IsDevelopment())
                {
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:8080");
                }
            });

        }
    }
}
