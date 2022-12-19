import { CompanyId } from '../../../../../src/Contexts/Moas/Shared/domain/Companies/CompanyId';
import { UuidMother } from '../../../Shared/domain/UuidMother';

export class CompanyIdMother {
  static create(value: string): CompanyId {
    return new CompanyId(value);
  }

  static random(): CompanyId {
    return this.create(UuidMother.random());
  }
}
