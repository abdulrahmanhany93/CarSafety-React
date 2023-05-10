import { Either } from "fp-ts/lib/Either";
import { UseCase } from "../../../../config/UseCases/IUseCase";
import { Failure } from "../../../../core/error/failures";
import Section from "../entities/section";
import { inject, injectable } from "inversify";
import IBrandRepository from "../../data/repositories/IBrandRepository";
import ServiceTypes from "../../../../core/utils/SlTypes";
@injectable()
class GetSectionsUseCase implements UseCase<Section[], string> {
  @inject(ServiceTypes.IBrandRepository)
  private brandRepository!: IBrandRepository;
  async call(param: string): Promise<Either<Failure, Section[]>> {
    return await this.brandRepository.getSections(param);
  }
}
export default GetSectionsUseCase;
