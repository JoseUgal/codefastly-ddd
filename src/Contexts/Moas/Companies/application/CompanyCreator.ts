import { CompanyId } from '../../Shared/domain/Companies/CompanyId';
import { Company } from '../domain/Company';
import { CompanyCity } from '../domain/CompanyCity';
import { CompanyCountry } from '../domain/CompanyCountry';
import { CompanyEmail } from '../domain/CompanyEmail';
import { CompanyLat } from '../domain/CompanyLat';
import { CompanyLong } from '../domain/CompanyLong';
import { CompanyName } from '../domain/CompanyName';
import { CompanyNumber } from '../domain/CompanyNumber';
import { CompanyPostalCode } from '../domain/CompanyPostalCode';
import { CompanyPrefixNumber } from '../domain/CompanyPrefixNumber';
import { CompanyRegion } from '../domain/CompanyRegion';
import { CompanySocialReason } from '../domain/CompanySocialReason';
import { CompanyStreetAddress1 } from '../domain/CompanyStreetAddress1';
import { CompanyStreetAddress2 } from '../domain/CompanyStreetAddress2';
import { ICompanyRepository } from '../domain/interfaces/ICompanyRepository';
import { ICompanyCreatorRequest } from './interfaces/ICompanyCreatorRequest';

export class CompanyCreator {
  constructor(private repository: ICompanyRepository) {}

  async run(request: ICompanyCreatorRequest): Promise<void> {
    const company = new Company({
      id: new CompanyId(request.id),
      name: new CompanyName(request.name),
      socialReason: new CompanySocialReason(request.socialReason),
      email: new CompanyEmail(request.email),
      prefixNumber: new CompanyPrefixNumber(request.prefixNumber),
      number: new CompanyNumber(request.number),
      streetAddress1: new CompanyStreetAddress1(request.streetAddress1),
      streetAddress2: new CompanyStreetAddress2(request.streetAddress2),
      city: new CompanyCity(request.city),
      region: new CompanyRegion(request.region),
      country: new CompanyCountry(request.country),
      postalCode: new CompanyPostalCode(request.postalCode),
      lat: new CompanyLat(request.lat),
      long: new CompanyLong(request.long),
    });

    return this.repository.save(company);
  }
}
