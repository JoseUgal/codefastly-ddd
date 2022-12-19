import { CompanyCountry } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyCountry';
import { WordMother } from '../../../Shared/domain/WordMother';

export class CompanyCountryMother {
  static create(value: string): CompanyCountry {
    return new CompanyCountry(value);
  }

  static random(): CompanyCountry {
    return this.create(WordMother.random({ maxLength: 20 }));
  }
}
