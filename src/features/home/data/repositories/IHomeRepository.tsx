import { Either } from "fp-ts/lib/Either";
import { Failure } from "../../../../core/error/failures";
import Brand from "../../domain/entities/brand";
import { Car } from "../../domain/entities/car";

interface IHomeRepository {
  getBrands(): Promise<Either<Failure, Brand[]>>;
  getmostSearchedCar(): Promise<Either<Failure, Car>>;
  getRandomCars(): Promise<Either<Failure, Car[]>>;
}
export default IHomeRepository;
