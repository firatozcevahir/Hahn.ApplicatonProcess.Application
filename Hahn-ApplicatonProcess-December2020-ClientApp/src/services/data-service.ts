import { HttpClient, HttpRequestMessage, HttpResponseMessage } from 'aurelia-http-client';
import { inject } from 'aurelia-framework';
import { config } from '@constants';
import { IApiResponse } from '@models/api-response';

@inject(HttpClient)
export class DataService {
  public api = config.api;
  constructor(private http: HttpClient) {
    console.log(this.api);
  }

  public async get<T>(service: string): Promise<IApiResponse<T>> {
    //returns the given generic object in IApiResponse object
    const url = `${this.api}/${service}`;
    return (await this.http.get(url)).content as IApiResponse<T>;
  }

  public async post<T>(service: string, content: T, put?: boolean): 
    Promise<HttpResponseMessage>{

      // returns object id in IApiResponse object
    if (put) {
      const url = `${this.api}/${service}`;
      return (await this.http.put(url, content )).content as HttpResponseMessage;
    }

    const url = `${this.api}/${service}`;
    return (await this.http.post(url, content)) as HttpResponseMessage;
  }

  public async delete(service: string,): Promise<IApiResponse<number>>{
    // returns object id in IApiResponse object if operation is successful
    const url = `${this.api}/${service}`;
    return (await this.http.delete(url)).content as IApiResponse<number>;
  }
}
