import { inject } from 'aurelia-framework';
import { ValidationControllerFactory, ValidationController, ValidationRules, validateTrigger, ControllerValidateResult } from 'aurelia-validation';
import { BootstrapFormRenderer } from '@helpers/bootstrap-form-renderer';
import { HttpClient } from 'aurelia-http-client';
@inject(ValidationControllerFactory, HttpClient)
export class FormValidator {
  
  public controller: ValidationController;
  public rules: ValidationRules;

  constructor(
    private controllerFactory: ValidationControllerFactory,
    private http: HttpClient
  ) {
    this.rules = this.getValidationRules();
    this.controller = this.controllerFactory.createForCurrentScope();
    this.controller.validateTrigger = validateTrigger.changeOrBlur;
    this.controller.addRenderer(new BootstrapFormRenderer());
  }

  private getValidationRules() {
    /* TODO: localized messages */
    return ValidationRules
     .ensure('name').required().minLength(5)
     .ensure('familyName').required().minLength(5)
     .ensure('age').required().range(20,60)
     .ensure('address').required().minLength(10)
     .ensure('emailAddress').required().satisfies(p => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(p))
     .ensure('countryOfOrigin').required().minLength(2)
     .ensure('hired').satisfies(p => p !== null && p !== undefined)
     .rules;
   }

   public get isValid(): boolean {
     return this.controller.errors.length === 0;
   }

   public validate(): Promise<ControllerValidateResult> {
     return this.controller.validate();
   }

}

