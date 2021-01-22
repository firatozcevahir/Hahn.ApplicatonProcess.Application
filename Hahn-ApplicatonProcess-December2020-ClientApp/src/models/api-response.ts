export interface IApiResponse<T>
{
  message: string;
  messageCode: number;
  success: boolean;
  data: T
}
