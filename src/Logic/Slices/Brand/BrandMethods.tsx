import { inject, injectable } from "inversify";
import ServiceTypes from "../../../core/utils/SlTypes";
import GetBrandsUseCase from "../../../features/home/domain/usecases/GetBrandsUseCase";
import { NoParams } from "../../../config/UseCases/UseCaseParams";
import { Either } from "fp-ts/lib/Either";
import { Failure } from "../../../core/error/failures";
import Brand from "../../../features/home/domain/entities/brand";
import GetSectionsUseCase from "../../../features/brand/domain/usecases/GetSectionsUseCase";
import Section from "../../../features/brand/domain/entities/section";
@injectable()
class BrandMethods {
  @inject(ServiceTypes.GetSectionsUseCase)
  private getSectionsUseCase!: GetSectionsUseCase;
  async getSections(brandId: string): Promise<Either<Failure, Section[]>> {
    return await this.getSectionsUseCase.call(brandId);
  }
}
export default BrandMethods;
