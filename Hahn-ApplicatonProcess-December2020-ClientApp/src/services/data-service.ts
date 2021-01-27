import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { HttpClient, HttpResponseMessage } from 'aurelia-http-client';
import { config } from '@constants';
import { IApiResponse } from '@models/api-response';

@inject(Router, HttpClient)
export class DataService {
  public api = config.api;
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }


  public navigateToConfirm(service: string, object: any, editMode: boolean): void {
    const confirmOperationRoute = this.router.routes.find(x => x.name === 'operationconfirm');
    
    // pass the route which called this method
    const callerRoute = this.router.routes.find(x => x.navModel.isActive); 
    
    if (!confirmOperationRoute) { return; }
    confirmOperationRoute.settings.relatedObject = object;
    confirmOperationRoute.settings.service = service;
    confirmOperationRoute.settings.editMode = editMode;
    confirmOperationRoute.settings.callerRoute = callerRoute;
    this.router.navigateToRoute('operationconfirm');
  }

  public async get<T>(service: string): Promise<IApiResponse<T>> {
    //returns the given generic object in IApiResponse object
    const url = `${this.api}/${service}`;
    return (await this.http.get(url)).content as IApiResponse<T>;
  }

  public async post<T>(service: string, content: T, put?: boolean):
    Promise<HttpResponseMessage> {

    // returns object id in IApiResponse object
    if (put) {
      const url = `${this.api}/${service}`;
      return (await this.http.put(url, content)).content;
    }

    const url = `${this.api}/${service}`;
    return (await this.http.post(url, content)).content;
  }

  public async delete(service: string,): Promise<IApiResponse<number>> {
    // returns object id in IApiResponse object if operation is successful
    const url = `${this.api}/${service}`;
    return (await this.http.delete(url)).content as IApiResponse<number>;
  }
}
