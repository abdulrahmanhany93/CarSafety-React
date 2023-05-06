import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import Section from "../../../brand/domain/entities/section";

interface IHomeWebServices {
  getBrands(): Promise<any>;
  getmostSearchedCar(): Promise<any>;
  getRandomCars(): Promise<FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[]>;
}
export default IHomeWebServices;
