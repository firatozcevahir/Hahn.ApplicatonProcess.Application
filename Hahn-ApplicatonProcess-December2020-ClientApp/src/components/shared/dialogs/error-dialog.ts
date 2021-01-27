import { inject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { IDialogData } from '@models/dialog-data-model';
import { MessageCode } from '@models/api-response';

@inject(DialogController)
export class ErrorDialog {
  public data: IDialogData;
  constructor(private controller: DialogController) {}

  private activate(val: IDialogData): void {
    this.data = val;
    console.log('data from dialog', this.data);
  }


  public isValidationError(): boolean{
    // if object is array might be validation errors    
   return this.data.messageCode === MessageCode.ValidationFailed;
  }
}
