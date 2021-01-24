import { inject } from 'aurelia-framework';
import {
  DialogCancellableOpenResult,
  DialogOpenPromise,
  DialogService,
} from 'aurelia-dialog';
import { ConfirmDialog } from '@sharedcomponents/dialogs/confirm-dialog';
import { ErrorDialog } from '@sharedcomponents/dialogs/error-dialog';
import { IDialogData } from '@models/dialog-data-model';

@inject(DialogService)
export class DialogServiceWrapper {
  constructor(private dialogService: DialogService) {}

  public openInfo(): DialogOpenPromise<DialogCancellableOpenResult> {
    return this.dialogService.open({
      viewModel: ConfirmDialog,
      model: 'Good or Bad',
      lock: false,
    });
  }

  public openError(data: IDialogData): DialogOpenPromise<DialogCancellableOpenResult>{
    return this.open(data, ErrorDialog);
  }

  public openConfirm(data: IDialogData): DialogOpenPromise<DialogCancellableOpenResult> {
    return this.open(data, ConfirmDialog);
  }

  private open(data, component: any): DialogOpenPromise<DialogCancellableOpenResult> {
    return this.dialogService.open({
      viewModel: component,
      model: data,
      lock: false,
    });
  }
}
