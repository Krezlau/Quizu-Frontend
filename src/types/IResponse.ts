interface IResponse {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string[];
  result: any;
}

export default IResponse;
