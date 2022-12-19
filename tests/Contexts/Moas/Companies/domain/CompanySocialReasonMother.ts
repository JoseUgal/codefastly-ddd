import { CompanySocialReason } from '../../../../../src/Contexts/Moas/Companies/domain/CompanySocialReason';
import { WordMother } from '../../../Shared/domain/WordMother';

export class CompanySocialReasonMother {
  static create(value: string): CompanySocialReason {
    return new CompanySocialReason(value);
  }

  static random(): CompanySocialReason {
    return this.create(WordMother.random({ maxLength: 20 }));
  }
}
