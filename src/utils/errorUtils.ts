interface SerializedError {
    status?: number;
    data?: {
      error?: string;
      message?: string;
    };
    message?: string;
  }
  
  export function isSerializedError(error: unknown): error is SerializedError {
    return (
      typeof error === 'object' &&
      error !== null &&
      'status' in error
    );
  }
  
  export function extractErrorMessage(error: unknown): string {
    if (isSerializedError(error)) {
      return error.data?.error || error.data?.message || error.message || 'Unknown error';
    }
    if (error instanceof Error) {
      return error.message;
    }
    return 'Unknown error occurred';
  }
  
  export function extractErrorStatus(error: unknown): number | undefined {
    if (isSerializedError(error)) {
      return error.status;
    }
    return undefined;
  }