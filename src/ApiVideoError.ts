import ProblemDetails from './model/ProblemDetails';

export default class ApiVideoError extends Error {
  private problemDetails?: ProblemDetails;
  private code: number;

  constructor(statusCode: number, problemDetails?: ProblemDetails) {
    super(problemDetails?.title || 'ApiVideoError');

    this.problemDetails = problemDetails;
    this.code = statusCode;
    this.stack = new Error().stack;
  }
}
