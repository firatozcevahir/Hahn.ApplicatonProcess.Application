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
    const url = `${this.api}/${service}`;
    return (await this.http.get(url)).content as IApiResponse<T>;
  }
}
