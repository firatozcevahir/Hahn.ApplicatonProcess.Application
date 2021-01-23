import { HttpClient } from 'aurelia-http-client';
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

  public async post<T>(service: string, content: T, put?: boolean): Promise<IApiResponse<number>>{
    if (put) {
      // returns object id in IApiResponse object
      const url = `${this.api}/${service}`;
      return (await this.http.put(url, content )).content as IApiResponse<number>;
    }

    const url = `${this.api}/${service}`;
    return (await this.http.post(url, content)).content as IApiResponse<number>;
  }

  public async delete(service: string,): Promise<IApiResponse<number>>{
    // returns object id in IApiResponse object if operation is successful
    const url = `${this.api}/${service}`;
    return (await this.http.delete(url)).content as IApiResponse<number>;
  }
}
