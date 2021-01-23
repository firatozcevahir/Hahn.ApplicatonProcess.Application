import { inject } from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)
export class ConfirmDialog{


  constructor(private dialogController: DialogController) {    
  }
}
