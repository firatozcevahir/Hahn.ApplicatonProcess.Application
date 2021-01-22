import { inject } from 'aurelia-framework';
import { DataService } from '@services/data-service';
import { Router } from 'aurelia-router';

import { IApplicant } from '@models/applicant-model';
import { HttpResponseMessage } from 'aurelia-http-client';


@inject(DataService, Router)
export class EditApplicant {

  public id: string;

  public editMode = false;
  public isError = false;
  public isRequesting = false;
  public applicant: IApplicant;


  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  activate(params: { id: string }): void {
    this.id = params.id;
    this.editMode = params.id !== undefined;
    if (this.editMode) {
      this.getApplicant();
    }
  }

  attached(): void {
    console.log('edit mode', this.editMode);
  }

  public getApplicant(): void {
    this.dataService.get<IApplicant>(`app/applicant/get/${this.id}`).then((response) => {
      this.applicant = response.data;
      console.log(this.applicant);      
    }).catch((error: HttpResponseMessage) => {
      this.isError = true;
      if(error.statusCode === 0){
        // Server Error
      } else if(error.statusCode === 400){
        // server returned bad request
      }
      // console.log('this will be fired', error);
      this.applicant = null;
      this.router.navigate('applicant/edit');
    }).finally(() => {
      this.isRequesting = false;
    });
  }

}
