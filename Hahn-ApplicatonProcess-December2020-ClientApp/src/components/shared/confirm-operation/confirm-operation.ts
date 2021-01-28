import { inject } from 'aurelia-framework';
import { Router, RouteConfig } from 'aurelia-router';
import { DataService } from '@services/data-service';
import { DialogServiceWrapper } from '@services/dialog-service';

import { IApiResponse, MessageCode } from '@models/api-response';
import { HttpResponseMessage } from 'aurelia-http-client';

@inject(Router, DataService, DialogServiceWrapper)
export class ConfirmOperation {

  public relatedObject: any;
  public editMode = false;
  public service: string;
  public callerRoute: RouteConfig;
  public isRequesting = false;

  constructor(
    private router: Router,
    private dataService: DataService,
    private dialogService: DialogServiceWrapper) { }

  activate(params: any, routeConfig: any): void {
    this.relatedObject = routeConfig.settings.relatedObject;
    if (!this.relatedObject) { this.router.navigate('/'); }
    this.editMode = routeConfig.settings.editMode;
    this.service = routeConfig.settings.service;
    this.callerRoute = routeConfig.settings.callerRoute;
  }

  public save(): void {
    this.isRequesting = true;
    this.dataService
      .post<IApiResponse<any>>(this.service, this.relatedObject, this.editMode)
      .then((res) => {
        this.router.navigate('/');
      })
      .catch((error: HttpResponseMessage) => {
          const apiResponse = (error.content as IApiResponse<any>);
          this.dialogService.openError({
            title: 'base.error',
            text: apiResponse.messageCode === MessageCode.ValidationFailed ? 'data.validation_error' : 'base.something_went_wrong',
            value: apiResponse.data, // pass validation errors as parameter,
            messageCode: apiResponse.messageCode ?? 0
          }).whenClosed(() => {
            this.returnPrevious();
          });
      })
      .finally(() => {
        this.isRequesting = false;
      });
  }


  public returnPrevious(): void {
    this.callerRoute.settings.relatedObject = this.relatedObject;
    this.router.navigateToRoute(
      this.callerRoute.name,
      this.relatedObject.id === 0 ? undefined : { id: this.relatedObject.id });
  }
}
