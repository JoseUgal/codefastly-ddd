import { CompanyLat } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyLat';
import { CoordinatesMother } from '../../../Shared/domain/CoordinatesMother';

export class CompanyLatMother {
  static create(value: number): CompanyLat {
    return new CompanyLat(value);
  }

  static random(): CompanyLat {
    return this.create(CoordinatesMother.randomLatitude());
  }
}
