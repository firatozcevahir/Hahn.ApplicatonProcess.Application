import { inject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
import { IDialogData } from '@models/dialog-data-model';

@inject(DialogController)
export class ErrorDialog {
  public data: IDialogData;
  constructor(private controller: DialogController) {}

  private activate(val: IDialogData): void {
    this.data = val;
  }


  public get isArray(): boolean{
    // if object is array might be validation errors    
   return this.data.value instanceof Array;
  }
}
