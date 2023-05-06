import { inject, injectable } from "inversify";
import Servicetypes from "../../../core/utils/SlTypes";
import GetBrandsUseCase from "../../../features/home/domain/usecases/GetBrandsUseCase";
import { NoParams } from "../../../config/UseCases/UseCaseParams";
import { Either } from "fp-ts/lib/Either";
import { Failure } from "../../../core/error/failures";
import Brand from "../../../features/home/domain/entities/brand";
import GetMostSearchedCarUseCase from "../../../features/home/domain/usecases/GetMostSearchedCar";
import { Car } from "../../../features/home/domain/entities/car";
import GetRandomCarsUseCase from "../../../features/home/domain/usecases/GetRandomCarsUseCase";

@injectable()
class HomeMethods {
  @inject(Servicetypes.GetBrandsUseCase)
  private getBrandsUseCase!: GetBrandsUseCase;
  @inject(Servicetypes.GetMostSearchedCarUseCase)
  private getMostSearchedCarUseCase!: GetMostSearchedCarUseCase;
  @inject(Servicetypes.GetRandomCarsUseCase)
  private GetRandomCarsUseCase!: GetRandomCarsUseCase;
  async getBrands(): Promise<Either<Failure, Brand[]>> {
    return await this.getBrandsUseCase.call(new NoParams());
  }
  async getMostSearchedCar(): Promise<Either<Failure, Car>> {
    return await this.getMostSearchedCarUseCase.call(new NoParams());
  }
  async getRandomCars(): Promise<Either<Failure, Car[]>> {
    return this.GetRandomCarsUseCase.call(new NoParams());
  }
}
export default HomeMethods;
