import { RenderInstruction, ValidateResult } from 'aurelia-validation';

export class BootstrapFormRenderer {
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

    // add help-block
    const message = document.createElement('div');
    message.className = 'invalid-feedback';
    message.textContent = result.message;
    message.id = `validation-message-${result.id}`;
    formGroup.appendChild(message);

    // update translations on the element
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
