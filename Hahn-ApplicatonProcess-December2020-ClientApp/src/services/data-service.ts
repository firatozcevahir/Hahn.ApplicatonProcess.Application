import { HttpClient, HttpResponseMessage } from 'aurelia-http-client'; 
import { inject } from 'aurelia-framework';
import { config } from '@helpers/constants';

@inject(HttpClient)
export class DataService {
  public api = config.api;
  constructor(private http: HttpClient) {
    console.log(this.api);
  }

  public get(service: string): Promise<HttpResponseMessage> {
    const url = `${this.api}/${service}`;
    return this.http.get(url);
  }
}
