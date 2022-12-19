import { CompanyEmail } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyEmail';
import { EmailMother } from '../../../Shared/domain/EmailMother';

export class CompanyEmailMother {
  static create(value: string): CompanyEmail {
    return new CompanyEmail(value);
  }

  static random(): CompanyEmail {
    return this.create(EmailMother.random());
  }
}
