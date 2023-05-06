import { Either, left, right } from "fp-ts/lib/Either";
import { Failure, ServerFailure } from "../../../../core/error/failures";
import IBrandRepository from "../../data/repositories/IBrandRepository";
import Section from "../entities/section";
import { inject, injectable } from "inversify";
import Servicetypes from "../../../../core/utils/SlTypes";
import IBrandWebServices from "../../data/datasources/IBrandWebServices";
import { handelError } from "../../../../core/utils/globalMethods";
@injectable()
class BrandRepository implements IBrandRepository {
  @inject(Servicetypes.IBrandWebServices)
  private brandWebServices!: IBrandWebServices;
  async getSections(brandId: string): Promise<Either<Failure, Section[]>> {
    try {
      const result = await this.brandWebServices.getSections(brandId);
      return right(result);
    } catch (e) {
      return handelError(e);
    }
  }
}
export default BrandRepository;
