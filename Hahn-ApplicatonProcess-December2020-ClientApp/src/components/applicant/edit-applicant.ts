import { inject, NewInstance } from "aurelia-framework";
import { HttpResponseMessage } from "aurelia-http-client";

import { DataService } from "@services/data-service";
import { Router } from "aurelia-router";
import { FormHelper } from "@helpers/form-helper";

import { Applicant } from "@models/applicant-model";

import { ValidationControllerFactory, ValidationController, ValidationRules, validateTrigger } from "aurelia-validation";
import { BootstrapFormRenderer } from "@helpers/bootstrap-form-renderer";

@inject(DataService, Router, FormHelper, ValidationControllerFactory)
export class EditApplicant {
  public id: string;

  public editMode = false;
  public isError = false;
  public isRequesting = false;
  public applicant = new Applicant();
  public rules: ValidationRules;

  controller: ValidationController;

  constructor(
    private dataService: DataService,
    private router: Router,
    private formHelper: FormHelper,
    private controllerFactory: ValidationControllerFactory
  ) {
    this.rules = this.getValidationRules();
    this.controller = this.controllerFactory.createForCurrentScope();
    this.controller.validateTrigger = validateTrigger.change;
    this.controller.addRenderer(new BootstrapFormRenderer());
    this.controller.subscribe((res) =>{
      console.log(res);
    });
  }

  activate(params: { id: string }): void {
    this.applicant = null;

    this.id = params.id;
    this.editMode = params.id !== undefined;

    if (this.editMode) {
      this.getApplicant();
    }
  }

  attached(): void {
    console.log("edit mode", this.editMode);
  }

  public getApplicant(): void {
    this.dataService
      .get<Applicant>(`app/applicant/get/${this.id}`)
      .then((response) => {
        this.applicant = response.data;
        console.log(this.applicant);
      })
      .catch((error: HttpResponseMessage) => {
        this.isError = true;
        if (error.statusCode === 0) {
          // Server Error
        } else if (error.statusCode === 400) {
          // server returned bad request
        }
        this.applicant = null;
        this.router.navigate("applicant/edit");
      })
      .finally(() => {
        this.isRequesting = false;
      });
  }

  public save(): void {
    const url = this.editMode;
  }

  public get hasValue(): boolean {
    return this.formHelper.hasValue(this.applicant);
  }

  public resetForm(): void {
    if (!this.editMode) {
      this.applicant = null;
      return;
    }
    this.applicant.name = "";
    this.applicant.hired = true;
    this.applicant.address = "";
    this.applicant.age = 0;
    this.applicant.countryOfOrigin = "";
    this.applicant.emailAddress = "";
    this.applicant.familyName = "";
  }

  private getValidationRules() {
   return ValidationRules
    .ensure('name').required().minLength(3).withMessage('Test Message Validation')
    .rules;
  }
}

