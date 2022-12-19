import { CompanyPostalCode } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyPostalCode';
import { WordMother } from '../../../Shared/domain/WordMother';

export class CompanyPostalCodeMother {
  static create(value: string): CompanyPostalCode {
    return new CompanyPostalCode(value);
  }

  static random(): CompanyPostalCode {
    return this.create(WordMother.random({ maxLength: 20 }));
  }
}
