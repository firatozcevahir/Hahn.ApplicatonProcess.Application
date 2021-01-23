import { inject } from "aurelia-framework";
import { DialogService } from "aurelia-dialog";
import { ConfirmDialog } from "@sharedcomponents/dialogs/confirm-dialog";

@inject(DialogService)
export class Home {
  constructor(private dialogService: DialogService) {}

  attached(): void {
    this.dialogService.open({
      viewModel: ConfirmDialog,
      model: "Good or Bad",
     lock: false,
      
    });
  }
}
