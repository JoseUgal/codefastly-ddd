import { MotherCreator } from './MotherCreator';

export class CoordinatesMother {
  static randomLatitude(): number {
    return parseFloat(MotherCreator.random().address.latitude());
  }

  static randomLongitude(): number {
    return parseFloat(MotherCreator.random().address.longitude());
  }
}
