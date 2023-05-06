import { Either } from "fp-ts/lib/Either";
import { UseCase } from "../../../../config/UseCases/IUseCase";
import { NoParams } from "../../../../config/UseCases/UseCaseParams";
import { Failure } from "../../../../core/error/failures";
import Brand from "../entities/brand";
import Servicetypes from "../../../../core/utils/SlTypes";
import { inject, injectable } from "inversify";
import IHomeRepository from "../../data/repositories/IHomeRepository";
import { Car } from "../entities/car";
@injectable()
class GetMostSearchedCarUseCase implements UseCase<Car, NoParams> {
  @inject(Servicetypes.IHomeRepository)
  private homeRepository!: IHomeRepository;
  async call(param: NoParams): Promise<Either<Failure, Car>> {
    return await this.homeRepository.getmostSearchedCar();
  }
}
export default GetMostSearchedCarUseCase;
