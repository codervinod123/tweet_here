class AppError extends Error {
  constructor(name, explanation, statusCode, message) {
    super();
    (this.name = name),
      (this.explanation = explanation),
      (this.statusCode = statusCode),
      (this.message = message);
  }
}

export { AppError };
