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
  ) { }

  activate(params: any, routeConfig: any): void {
    // get related object to get the values back after sending the form if operation fails
    const relatedObject = routeConfig.settings.relatedObject;
    this.applicant = relatedObject ? relatedObject : this.initFormValues();
    this.id = params.id;
    this.editMode = params.id !== undefined;

    if (this.editMode && !relatedObject) {
      this.getApplicant();
    }
    // set relatedobject back to undefined to make sure
    // it is not overriding the default insert/edit form
    routeConfig.settings.relatedObject = undefined;
    this.validator.reset();
  }

  private initFormValues(): Applicant {
    // similar to creating reactive form in angular with initial values
    return {
      id: this.editMode ? +this.id : 0, // keep id if editMode is true
      address: '',
      age: null,
      countryOfOrigin: '',
      emailAddress: '',
      familyName: '',
      hired: false,
      name: '',
    };
  }

  public getApplicant(): void {
    this.isRequesting = true;
    this.dataService
      .get<Applicant>(`app/applicant/${this.id}`)
      .then((response) => {
        console.log('response data', response.data);
        this.applicant = response.data;
      })
      .catch((error: HttpResponseMessage) => {
        this.router.navigate('applicant/edit'); // if applicant not found, insert new
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
    this.dataService.navigateToConfirm('app/applicant', this.applicant, this.editMode);
  }

  public get hasValue(): boolean {
    return this.formHelper.hasValue(this.applicant);
  }

  public get hasEmptyFields(): boolean {
    return this.formHelper.hasEmptyFields(this.applicant);
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
}
