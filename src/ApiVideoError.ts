import { Response } from 'got';
import ProblemDetails from 'model/ProblemDetails';

export default class ApiVideoError extends Error {
  private problemDetails: ProblemDetails;
  private code: number;

  constructor(response: Response<ProblemDetails>) {
    const { statusCode, body: problemDetails } = response;

    super(problemDetails.title);

    this.problemDetails = problemDetails;
    this.code = statusCode;
    this.stack = new Error().stack;
  }
}
