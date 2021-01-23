import { inject } from 'aurelia-framework';
import {
  ValidationControllerFactory,
  ValidationController,
  ValidationRules,
  validateTrigger,
  ControllerValidateResult
} from 'aurelia-validation';
import { BootstrapFormRenderer} from '@helpers/bootstrap-form-renderer';
import { config } from '@constants';

@inject(ValidationControllerFactory, BootstrapFormRenderer)
export class FormValidator {
  public controller: ValidationController;
  public rules = config.validationRules;

  constructor(
    private controllerFactory: ValidationControllerFactory,
    private renderer: BootstrapFormRenderer
  ) {
    this.controller = this.controllerFactory.createForCurrentScope();
    this.controller.validateTrigger = validateTrigger.changeOrBlur;
    this.controller.addRenderer(this.renderer);
  }

  public get isValid(): boolean {
    return this.controller.errors.length === 0;
  }

  public validate(): Promise<ControllerValidateResult> {
    return this.controller.validate();
  }
}
