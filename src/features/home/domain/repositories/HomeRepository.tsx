import { Either } from "fp-ts/lib/Either";
import { Failure, InternetFailure } from "../../../../core/error/failures";
import IHomeRepository from "../../data/repositories/IHomeRepository";
import Brand from "../entities/brand";
import { Car } from "../entities/car";
import { inject, injectable } from "inversify";
import ServiceTypes from "../../../../core/utils/SlTypes";
import IHomeWebServices from "../../data/datasources/IHomeWebServices";
import { right } from "fp-ts/lib/Either";
import { handelError } from "../../../../core/utils/globalMethods";
@injectable()
class HomeRepository implements IHomeRepository {
  @inject(ServiceTypes.IHomeWebServices)
  private homeWebServices!: IHomeWebServices;
  async getBrands(): Promise<Either<Failure, Brand[]>> {
    try {
      const result = await this.homeWebServices.getBrands();
      return right(result);
    } catch (e) {
      return handelError(e);
    }
  }
  async getmostSearchedCar(): Promise<Either<Failure, Car>> {
    try {
      const result = await this.homeWebServices.getmostSearchedCar();

      return right(result[0].car);
    } catch (e) {
      return handelError(e);
    }
  }
  async getRandomCars(): Promise<Either<Failure, Car[]>> {
    try {
      const result = await this.homeWebServices.getRandomCars();
      let NewCars: Car[] = [];
      result.map((item) => {
        NewCars = NewCars.concat(item.data().cars);
      });
      return right(NewCars);
    } catch (e) {
      return handelError(e);
    }
  }
}
export default HomeRepository;
