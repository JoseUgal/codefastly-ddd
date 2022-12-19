import { CompanyPrefixNumber } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyPrefixNumber';
import { WordMother } from '../../../Shared/domain/WordMother';

export class CompanyPrefixNumberMother {
  static create(value: string): CompanyPrefixNumber {
    return new CompanyPrefixNumber(value);
  }

  static random(): CompanyPrefixNumber {
    return this.create(`+${WordMother.random({ maxLength: 2, minLength: 2 })}`);
  }
}
