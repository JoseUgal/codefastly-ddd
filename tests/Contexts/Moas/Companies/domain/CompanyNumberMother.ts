import { CompanyNumber } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyNumber';
import { WordMother } from '../../../Shared/domain/WordMother';

export class CompanyNumberMother {
  static create(value: string): CompanyNumber {
    return new CompanyNumber(value);
  }

  static random(): CompanyNumber {
    return this.create(WordMother.random({ maxLength: 9, minLength: 9 }));
  }
}
