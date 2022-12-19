import { CompanyCity } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyCity';
import { WordMother } from '../../../Shared/domain/WordMother';

export class CompanyCityMother {
  static create(value: string): CompanyCity {
    return new CompanyCity(value);
  }

  static random(): CompanyCity {
    return this.create(WordMother.random({ maxLength: 20 }));
  }
}
