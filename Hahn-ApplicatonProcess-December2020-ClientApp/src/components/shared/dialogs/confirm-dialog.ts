import { inject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { IDialogData } from '@models/dialog-data-model';

@inject(DialogController)
export class ConfirmDialog {
  public data: IDialogData;
  constructor(private controller: DialogController) {}

  private activate(val: IDialogData): void {
    this.data = val;
    console.log(this.data);
  }
}
