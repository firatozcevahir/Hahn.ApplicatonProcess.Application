import { MessageCode } from './api-response';

export interface IDialogData {
  title: string;
  text?: string;
  value?: any; // can be object or object's name to show on dialog
  messageCode?: MessageCode;
}
