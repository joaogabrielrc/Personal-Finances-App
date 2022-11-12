abstract class CustomAPIError extends Error {
  public readonly statusCode: number;
  public error: object;

  constructor(message: object) {
    super(null);
    this.error = message;
  }

  public get(): object {
    return this.error;
  }
}

export default CustomAPIError;
