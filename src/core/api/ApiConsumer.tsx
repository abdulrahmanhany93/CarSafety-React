import firestore from "@react-native-firebase/firestore";
import { injectable } from "inversify";
@injectable()
export default class CloudConsumer {
  db = firestore();

  getCollection = async (collectionName: string) => {
    const snapshot = await this.db.collection(collectionName).get();
    return snapshot.docs.map((doc) => doc.data());
  };

  getDocument = async (collectionName: string, documentName: string) => {
    const snapshot = await this.db
      .collection(collectionName)
      .doc(documentName)
      .get();
    return snapshot.data();
  };

  getLimitedCollection = async (collectionName: string, limit: number) => {
    const snapshot = await this.db
      .collection(collectionName)
      .limit(limit)
      .get();
    return snapshot.docs.map((doc) => doc.data());
  };

  getRangeCollectionDocs = async (collectionName: string) => {
    const snapshot = await this.db.collectionGroup(collectionName).get();
    return snapshot.docs;
  };
}
