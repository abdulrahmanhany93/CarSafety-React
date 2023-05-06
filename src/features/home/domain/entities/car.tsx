import Brand from "./brand";
export enum CarType {
  automatic = "أوتوماتيك",
  manual = "يدوي",
  none = "",
}
export class Car {
  public readonly id: string;
  public readonly name: string;
  public readonly nickName?: string;
  public readonly description: string;
  public readonly rating: number;
  public readonly images: string[];
  public readonly pdfUrl: string;
  public readonly brand: Brand;
  public readonly carType: CarType;
  public readonly seatesNumber: string;
  public readonly adultOccupant: number;
  public readonly childOccupant: number;
  public readonly vulnerableRoadUsers: number;
  public readonly safetyAssist: number;

  constructor({
    name,
    id,
    nickName = "",
    brand,
    pdfUrl,
    rating,
    description,
    images,
    carType,
    seatesNumber,
    adultOccupant,
    childOccupant,
    vulnerableRoadUsers,
    safetyAssist,
  }: {
    name: string;
    id: string;
    nickName?: string;
    brand: Brand;
    pdfUrl: string;
    rating: number;
    description: string;
    images: string[];
    carType: CarType;
    seatesNumber: string;
    adultOccupant: number;
    childOccupant: number;
    vulnerableRoadUsers: number;
    safetyAssist: number;
  }) {
    this.name = name;
    this.id = id;
    this.nickName = nickName;
    this.brand = brand;
    this.pdfUrl = pdfUrl;
    this.rating = rating;
    this.description = description;
    this.images = images;
    this.carType = carType;
    this.seatesNumber = seatesNumber;
    this.adultOccupant = adultOccupant;
    this.childOccupant = childOccupant;
    this.vulnerableRoadUsers = vulnerableRoadUsers;
    this.safetyAssist = safetyAssist;
  }

  public static getCarType(carType: string): CarType {
    switch (carType) {
      case "automatic":
        return CarType.automatic;
      case "manual":
        return CarType.manual;
      default:
        return CarType.none;
    }
  }
}
