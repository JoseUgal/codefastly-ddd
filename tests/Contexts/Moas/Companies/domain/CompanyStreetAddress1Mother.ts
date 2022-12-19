import { CompanyStreetAddress1 } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyStreetAddress1';
import { WordMother } from '../../../Shared/domain/WordMother';

export class CompanyStreetAddress1Mother {
  static create(value: string): CompanyStreetAddress1 {
    return new CompanyStreetAddress1(value);
  }

  static random(): CompanyStreetAddress1 {
    return this.create(WordMother.random({ maxLength: 25 }));
  }
}
