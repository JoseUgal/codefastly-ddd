import { CompanyRegion } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyRegion';
import { WordMother } from '../../../Shared/domain/WordMother';

export class CompanyRegionMother {
  static create(value: string): CompanyRegion {
    return new CompanyRegion(value);
  }

  static random(): CompanyRegion {
    return this.create(WordMother.random({ maxLength: 20 }));
  }
}
