import { inject } from 'aurelia-framework';
import {
  ValidationControllerFactory,
  ValidationController,
  validateTrigger,
  ControllerValidateResult,
} from 'aurelia-validation';
import { BootstrapFormRenderer } from '@helpers/bootstrap-form-renderer';
import { config } from '@constants';

@inject(ValidationControllerFactory, BootstrapFormRenderer)
export class FormValidator {
  public controller: ValidationController;
  public rules = config.validationRules;
  public isValid = false;

  constructor(
    private controllerFactory: ValidationControllerFactory,
    private renderer: BootstrapFormRenderer
  ) {
    this.controller = this.controllerFactory.createForCurrentScope();
    this.controller.validateTrigger = validateTrigger.changeOrBlur;
    this.controller.addRenderer(this.renderer);
    this.controller.subscribe((res) =>{   
      this.isValid = res.errors.length === 0;
    });
  }

  public validate(): Promise<ControllerValidateResult> {
    return this.controller.validate();
  }

  public reVAlidateErrors(): void {
    return this.controller.revalidateErrors();
  }

  public reset(): void {
    return this.controller.reset();
  }
}
