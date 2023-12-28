export default interface ProgressiveSession<T> {
  uploadPart(file: Buffer | Blob | ArrayBuffer): Promise<T>;
  uploadLastPart(file: Buffer | Blob | ArrayBuffer): Promise<T>;
}
