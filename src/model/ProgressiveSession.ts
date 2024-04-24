import { ApiResponseHeaders } from '../HttpClient';

export default interface ProgressiveSession<T> {
  uploadPart(file: string): Promise<T>;
  uploadPartWithResponseHeaders(
    file: string
  ): Promise<{ headers: ApiResponseHeaders; body: T }>;
  uploadLastPart(file: string): Promise<T>;
  uploadLastPartWithResponseHeaders(
    file: string
  ): Promise<{ headers: ApiResponseHeaders; body: T }>;
}
