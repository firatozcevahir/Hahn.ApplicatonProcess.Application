import { inject } from 'aurelia-framework';
import {
  ValidationControllerFactory,
  ValidationController,
  validateTrigger,
  ControllerValidateResult,
  ValidationRules,
  Rule,
  ValidateInstruction
} from 'aurelia-validation';
import { BootstrapFormRenderer } from '@helpers/bootstrap-form-renderer';
import { HttpClient } from 'aurelia-http-client';

@inject(ValidationControllerFactory, BootstrapFormRenderer, HttpClient)
export class FormValidator {
  public controller: ValidationController;
  public rules = this.ValidationRules();
  public isValid = false;
  constructor(
    private controllerFactory: ValidationControllerFactory,
    private renderer: BootstrapFormRenderer,
    private http: HttpClient
  ) {
    this.controller = this.controllerFactory.createForCurrentScope();
    this.controller.validateTrigger = validateTrigger.changeOrFocusout;
    this.controller.addRenderer(this.renderer);
    this.controller.subscribe((res) => {
      this.isValid = res.errors.length === 0;
    });
  }

  public validate(instructions?: ValidateInstruction): Promise<ControllerValidateResult> {
    return this.controller.validate(instructions);
  }
  public get validating(): boolean {
    return this.controller.validating;
  }

  private ValidationRules(): Rule<any, any>[][] {
    return ValidationRules.ensure('name')
      .required()
      .withMessage('data.errors.name_required')
      .minLength(5)
      .withMessage('data.errors.name_greater_than|5')
      .ensure('familyName')
      .required()
      .withMessage('data.errors.familyname_required')
      .minLength(5)
      .withMessage('data.errors.familyname_greater_than|5')
      .ensure('age')
      .range(20, 60)
      .withMessage('data.errors.age_between|20-60')
      .matches(/^[1-9]\d*$/)
      .withMessage('data.errors.age_invalid')
      .ensure('address')
      .required()
      .withMessage('data.errors.address_required')
      .minLength(10)
      .withMessage('data.errors.address_greater_than|10')
      .ensure('emailAddress')
      .required()
      .withMessage('data.errors.email_address_required')
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
      .withMessage('data.errors.invalid_email_address')
      .ensure('countryOfOrigin')
      .required()
      .withMessage('data.errors.country_required')
      .minLength(2)
      .withMessage('data.errors.country_greater_than|2')
      .satisfies(async (p) => {
        if(!p) return;
        // async check from restcountries api
        let res = false;
        await this.http.get(`https://restcountries.eu/rest/v2/name/${p}?fullText=true`)
          .then(() => {
            res = true;
          }).catch((error) => {
            res = false;
          });
        return res;
      })
      .then()
      .withMessage('data.errors.invalid_country')
      .rules;
  }

  public reValidateErrors(): void {
    return this.controller.revalidateErrors();
  }

  public reset(): void {
    return this.controller.reset();
  }

}
