import ServiceTypes from "../../../../core/utils/SlTypes";
import CloudConsumer from "../../../../core/api/ApiConsumer";
import { EndPoint } from "../../../../core/api/EndPoints";
import IHomeWebServices from "./IHomeWebServices";
import { inject, injectable } from "inversify";
import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

@injectable()
class HomeWebServices implements IHomeWebServices {
  @inject(ServiceTypes.CloudConsumer) private cloudConsumer!: CloudConsumer;
  getBrands(): Promise<any> {
    return this.cloudConsumer.getCollection(EndPoint.brandsPath);
  }
  getmostSearchedCar(): Promise<any> {
    return this.cloudConsumer.getLimitedCollection(EndPoint.carsViews, 1);
  }
  getRandomCars(): Promise<
    FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[]
  > {
    return this.cloudConsumer.getRangeCollectionDocs(EndPoint.sections);
  }
}
export default HomeWebServices;
