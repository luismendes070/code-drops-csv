// ChatGPT
class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

// Uso
function myFunction() {
    throw new CustomError('This is a custom error message');
}
