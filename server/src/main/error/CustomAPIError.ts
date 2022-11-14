abstract class CustomAPIError extends Error {
  public readonly statusCode: number;

  constructor(message: string) {
    super(message);
  }
}

export default CustomAPIError;
