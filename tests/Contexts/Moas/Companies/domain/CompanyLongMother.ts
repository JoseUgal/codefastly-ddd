import { CompanyLong } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyLong';
import { CoordinatesMother } from '../../../Shared/domain/CoordinatesMother';

export class CompanyLongMother {
  static create(value: number): CompanyLong {
    return new CompanyLong(value);
  }

  static random(): CompanyLong {
    return this.create(CoordinatesMother.randomLongitude());
  }
}
