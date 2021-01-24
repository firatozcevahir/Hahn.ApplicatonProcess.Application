import { inject } from 'aurelia-framework';
import { HttpResponseMessage } from 'aurelia-http-client';

import { Router } from 'aurelia-router';
import { DataService } from '@services/data-service';
import { FormHelper } from '@helpers/form-helper';
import { FormValidator } from '@helpers/form-validator';

import { Applicant } from '@models/applicant-model';
import { DialogServiceWrapper } from '@services/dialog-service';

@inject(Router, DataService, FormHelper, FormValidator, DialogServiceWrapper)
export class EditApplicant {
  public id: string;

  public editMode = false;
  public validationErrors = null;
  public isRequesting = false;
  public applicant: Applicant;

  constructor(
    private router: Router,
    private dataService: DataService,
    private formHelper: FormHelper,
    private validator: FormValidator,
    private dialogService: DialogServiceWrapper
  ) {}

  activate(params: { id: string }): void {
    this.applicant = this.initFormValues();
    this.id = params.id;
    this.editMode = params.id !== undefined;

    if (this.editMode) {
      this.getApplicant();
    }

    console.log('form helper', this.formHelper);
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
    if (!this.validator.isValid) {
      return;
    }

    this.isRequesting = true;
    this.dataService
      .post('app/applicant', this.applicant, this.editMode)
      .then((res) => {
        if (!this.editMode) {
          console.log('created', res);
        }

        this.router.navigate('/');
      })
      .catch((error: HttpResponseMessage) => {
        if (error.statusCode === 400) {
          this.validationErrors = error.content.errors ? Object.entries(error.content.errors) : error.content.title;
          console.log(this.validationErrors);
          this.dialogService.openError({
            title: 'base.error',
            value: this.validationErrors // pass validation errors as parameter
          }).whenClosed(() =>{
            console.log('closed error dialog');
          });

        } else {
          // 0 server error
        }
      })
      .finally(() => {
        this.isRequesting = false;
      });
  }

  public get hasValue(): boolean {
    return this.formHelper.hasValue(this.applicant);
  }

  public get hasEmptyValues(): boolean {
    return this.formHelper.hasEmptyValues(this.applicant);
  }

  public resetForm(): void {
    this.dialogService
      .openConfirm({
        title: 'base.confirm_reset',
        text: 'base.data_will_be_reset',
      })
      .whenClosed((res) => {
        if (!res.wasCancelled) {
          this.applicant = this.initFormValues();
          this.validator.validate();
        }
      });
  }

  private initFormValues(): Applicant {
    // similar to creating reactive form in angular with initial values
    return {
      id: this.editMode ? +this.id : 0, // keep id if it is edit mode is true
      address: '',
      age: null,
      countryOfOrigin: '',
      emailAddress: '',
      familyName: '',
      hired: false,
      name: '',
    };
  }
}
