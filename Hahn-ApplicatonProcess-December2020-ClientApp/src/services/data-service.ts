import { HttpClient } from "aurelia-http-client"; // or 'aurelia-fetch-client' if you want to use fetch
import { inject } from "aurelia-framework";

@inject(HttpClient)
export class DataService {
  public api =
    location.protocol +
    "//" +
    location.hostname +
    (location.port ? ":" + location.port : "");
  constructor(private http: HttpClient) {}

  public GetApplicants(): void {
    this.http.get("http://localhost:7000/app/applicant/get").then((res) => {
      console.log(res);
    });
  }
}
