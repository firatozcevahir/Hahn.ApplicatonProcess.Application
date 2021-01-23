import { inject } from 'aurelia-framework';
import { HttpResponseMessage } from 'aurelia-http-client';

import { DataService } from '@services/data-service';
import { Router } from 'aurelia-router';
import { FormHelper } from '@helpers/form-helper';
import { FormValidator } from '@helpers/form-validator';

import { Applicant } from '@models/applicant-model';
import { threadId } from 'worker_threads';

@inject(DataService, Router, FormHelper, FormValidator)
export class EditApplicant {
  public id: string;

  public editMode = false;
  public validationErrors = null;
  public isRequesting = false;
  public applicant: Applicant;

  constructor(
    private dataService: DataService,
    private router: Router,
    private formHelper: FormHelper,
    private validator: FormValidator
  ) {
  }


  activate(params: { id: string }): void {
    this.applicant = this.initFormValues();
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
    this.isRequesting = true;
    this.dataService
      .get<Applicant>(`app/applicant/${this.id}`)
      .then((response) => {
        this.applicant = response.data;
        console.log(this.applicant);
      })
      .catch((error: HttpResponseMessage) => {
        this.editMode = false;
      })
      .finally(() => {
        this.isRequesting = false;
      });
  }

  public save(): void {

    if(!this.validator.isValid){
      return;
    }

    this.isRequesting = true;
    this.validationErrors = false;
      this.dataService.post('app/applicant', this.applicant, this.editMode).then((res) =>{
        if(!this.editMode){
          console.log('created', res);
        }
      }).catch((error: HttpResponseMessage) =>{
        if(error.statusCode === 400){
          this.validationErrors = error.content.errors;
          console.log(Object.entries(this.validationErrors));
        } else {
          // 0 server error
        }
      }).finally(() =>{
        this.isRequesting = false;
      });
  }

  public get hasValue(): boolean {
    return this.formHelper.hasValue(this.applicant);
  }

  public get hasEmptyValues(): boolean {
    return this.formHelper.hasEmptyValues(this.applicant);
  }

  public get errors(): any {
    return Object.entries(this.validationErrors);
  }

  public resetForm(): void {
    this.applicant = null;
  }

  private initFormValues(): Applicant {
    // similar to creating reactive form in angular with initial values
    return {
      id: 0,
      address: null,
      age: null,
      countryOfOrigin: null,
      emailAddress: null,
      familyName: null,
      hired: false,
      name: null,
    };
  }
}
