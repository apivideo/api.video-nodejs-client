export default interface ProgressiveSession<T> {
  uploadPart(file: string): Promise<T>;
  uploadLastPart(file: string): Promise<T>;
}
