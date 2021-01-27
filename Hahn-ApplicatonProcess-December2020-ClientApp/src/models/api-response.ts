export interface IApiResponse<T> {
  message: string;
  messageCode: MessageCode;
  success: boolean;
  data: T
}

export enum MessageCode {
  Exception,
  NotFound,
  AlreadyExists,

  GetSuccesful,
  CreateSuccessful,
  DeleteSuccesful,
  UpdateSuccesful,

  GetFailed,
  CreateFailed,
  DeleteFailed,
  UpdateFailed,
  ValidationFailed
}
