import { Car } from "../../../home/domain/entities/car";

class Section {
  year: string;
  cars: Car[];
  constructor(year: string, cars: Car[]) {
    this.year = year;
    this.cars = cars;
  }
}
export default Section;
