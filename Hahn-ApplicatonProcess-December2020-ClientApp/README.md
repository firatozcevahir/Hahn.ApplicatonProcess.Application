# Hahn.ApplicatonProcess.Application

### Build and Start the Project
1. Download as zip archive or clone the repository
2. After downloading, open the solution with Visual Studio
3. You can use `dotnet restore` to restore the NuGet packages or wait Visual Studio to restore the projects automatically
4. To run the aurelia app, you also need to run `npm install`to install dependencies
(the aurelia app is located in the _Hahn-ApplicatonProcess-December2020-ClientApp_ folder)


##### - Running the Project
 1. If you want to run the project in **Production** mode, set _ASPNETCORE_ENVIRONMENT_ to _Production_ in launchSettings.json
2. Then run the project
 
**_Note:_** In production mode, you **do not** have to run the aurelia app. The app is served statically from the ___wwwroot___ folder (because aurelia app's build output is set to backend's wwwroot folder in aurelia.json)
- - -
If you want to run the project in development mode:
1. Set _ASPNETCORE_ENVIRONMENT_ to _Development_ in launchSettings.json
2. Then run the project
3. Run the aurelia app, using `au run` command 
(the aurelia app is located in the _Hahn-ApplicatonProcess-December2020-ClientApp_ folder)

**_Note:_** In development mode, you also need to run the aurelia app because backend uses _UseProxyToSpaDevelopmentServer_ __in development mode__ to forward requests to the aurelia development server.



### Docker Support
This app supports docker. So you can run the app as a docker container using the command below:
`docker run -d --name hahn_app -p 7000:80 firatozcevahir/hahnapplicatonprocessdecember2020web`
This command will pull the image with the `latest` tag and run as a container.
After container created and running, navigate to http://localhost:7000 to see the app.

