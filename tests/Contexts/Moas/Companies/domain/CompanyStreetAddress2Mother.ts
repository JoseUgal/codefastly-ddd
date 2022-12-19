import { CompanyStreetAddress2 } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyStreetAddress2';
import { WordMother } from '../../../Shared/domain/WordMother';

export class CompanyStreetAddress2Mother {
  static create(value: string): CompanyStreetAddress2 {
    return new CompanyStreetAddress2(value);
  }

  static random(): CompanyStreetAddress2 {
    return this.create(WordMother.random({ maxLength: 25 }));
  }
}
