export default interface UploadProgressEvent {
  uploadedBytes: number;
  totalBytes: number;
  chunksCount: number;
  currentChunk: number;
  currentChunkTotalBytes: number;
  currentChunkUploadedBytes: number;
}
