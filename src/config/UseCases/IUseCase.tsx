import { Either } from "fp-ts/lib/Either";
import { Failure } from "../../core/error/failures";

export interface UseCase<T, param> {
  call(param: param): Promise<Either<Failure, T>>;
}
