import { Either } from "fp-ts/lib/Either";
import { Failure } from "../../../../core/error/failures";
import Section from "../../domain/entities/section";

interface IBrandRepository {
  getSections(brandId: string): Promise<Either<Failure, Section[]>>;
}
export default IBrandRepository;
