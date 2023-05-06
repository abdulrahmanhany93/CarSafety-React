import { FirebaseCode } from "../../config/firebase/FirebaseStatusCode";

export abstract class Failure {
  readonly message: string;
  readonly code: string;

  constructor(message: string, code: string) {
    this.message = FirebaseCode[code] ?? message;
    this.code = code;
  }
  toJSON() {
    return {
      message: this.message,
      code: this.code,
    };
  }
}

export class ServerFailure extends Failure {
  constructor(message: string, code: string) {
    super(message, code);
  }
}

export class InternetFailure extends Failure {
  constructor(message: string, code: string) {
    super(message, code);
  }
}

export class CacheFailure extends Failure {
  constructor(message: string, code: string) {
    super(message, code);
  }
}

export class NoFilePickedFailure extends Failure {
  constructor(message: string, code: string) {
    super(message, code);
  }
}
