import { RenderInstruction, ValidateResult } from 'aurelia-validation';
import { inject } from 'aurelia-framework';
import { Enhancer } from '@helpers/enhancer';

@inject(Enhancer)
export class BootstrapFormRenderer {
  constructor(private enhancer: Enhancer) { }

  render(instruction: RenderInstruction): void {
    for (const { result, elements } of instruction.unrender) {
      for (const element of elements) {
        this.remove(element, result);
      }
    }

    for (const { result, elements } of instruction.render) {
      for (const element of elements) {
        this.add(element, result);
      }
    }
  }

  add(element: Element, result: ValidateResult): void {
    if (result.valid) {
      element.classList.add('is-valid');
      return;
    }
    // add the is-invalid class to the enclosing form-group div
    element.classList.add('is-invalid');

    const formGroup = element.closest('.form-group');
    if (!formGroup) {
      return;
    }

    let feedbackDiv = formGroup.querySelector('.invalid-feedback');
    const msg = result.message.split('|');
    const txt = '${\'' + msg[0] + '\' & t' + (msg[1] ? ':{param: \'' + msg[1] + '\'}}' : '}');

    // check if help block added already
    if (feedbackDiv) {
      feedbackDiv.innerHTML = txt;
      feedbackDiv.id = `validation-message-${result.id}`;
      this.enhancer.enhance(this, feedbackDiv);
      return;
    }

    // add help-block
    feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'invalid-feedback';
    feedbackDiv.innerHTML = txt;
    feedbackDiv.id = `validation-message-${result.id}`;

    // because of creating elements dynamically, needed to enhance the element
    this.enhancer.enhance(this, feedbackDiv);
    formGroup.appendChild(feedbackDiv);
  }

  remove(element: Element, result: ValidateResult): void {
    const formGroup = element.closest('.form-group');
    if (!formGroup) {
      return;
    }

    element.classList.add('is-valid');

    // remove help-block
    const message = formGroup.querySelector(`#validation-message-${result.id}`);
    if (message) {
      formGroup.removeChild(message);

      // remove the is-invalid class from the enclosing form-group div
      if (formGroup.querySelectorAll('.invalid-feedback').length === 0) {
        element.classList.remove('is-invalid');
      }
    }
  }
}
