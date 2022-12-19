import { Company } from '../../../../../src/Contexts/Moas/Companies/domain/Company';
import { CompanyCity } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyCity';
import { CompanyCountry } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyCountry';
import { CompanyEmail } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyEmail';
import { CompanyLat } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyLat';
import { CompanyLong } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyLong';
import { CompanyName } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyName';
import { CompanyNumber } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyNumber';
import { CompanyPostalCode } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyPostalCode';
import { CompanyPrefixNumber } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyPrefixNumber';
import { CompanyRegion } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyRegion';
import { CompanySocialReason } from '../../../../../src/Contexts/Moas/Companies/domain/CompanySocialReason';
import { CompanyStreetAddress1 } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyStreetAddress1';
import { CompanyStreetAddress2 } from '../../../../../src/Contexts/Moas/Companies/domain/CompanyStreetAddress2';
import { CompanyId } from '../../../../../src/Contexts/Moas/Shared/domain/Companies/CompanyId';
import { ICompanyCreatorRequest } from '../../../../../src/Contexts/Moas/Companies/application/interfaces/ICompanyCreatorRequest';
import { CompanyIdMother } from '../../Shared/Companies/CompanyIdMother';
import { CompanyNameMother } from '../domain/CompanyNameMother';
import { CompanySocialReasonMother } from '../domain/CompanySocialReasonMother';
import { CompanyEmailMother } from '../domain/CompanyEmailMother';
import { CompanyPrefixNumberMother } from '../domain/CompanyPrefixNumberMother';
import { CompanyNumberMother } from '../domain/CompanyNumberMother';
import { CompanyStreetAddress1Mother } from '../domain/CompanyStreetAddress1Mother';
import { CompanyStreetAddress2Mother } from '../domain/CompanyStreetAddress2Mother';
import { CompanyPostalCodeMother } from '../domain/CompanyPostalCodeMother';
import { CompanyCityMother } from '../domain/CompanyCityMother';
import { CompanyCountryMother } from '../domain/CompanyCountryMother';
import { CompanyRegionMother } from '../domain/CompanyRegionMother';
import { CompanyLatMother } from '../domain/CompanyLatMother';
import { CompanyLongMother } from '../domain/CompanyLongMother';

export class CompanyMother {
  static create(
    id: CompanyId,
    name: CompanyName,
    socialReason: CompanySocialReason,
    email: CompanyEmail,
    prefixNumber: CompanyPrefixNumber,
    number: CompanyNumber,
    streetAddress1: CompanyStreetAddress1,
    streetAddress2: CompanyStreetAddress2,
    postalCode: CompanyPostalCode,
    country: CompanyCountry,
    city: CompanyCity,
    region: CompanyRegion,
    lat: CompanyLat,
    long: CompanyLong,
  ): Company {
    return new Company({
      id,
      name,
      socialReason,
      email,
      prefixNumber,
      number,
      streetAddress1,
      streetAddress2,
      postalCode,
      city,
      country,
      region,
      lat,
      long,
    });
  }

  static fromRequest(request: ICompanyCreatorRequest): Company {
    return this.create(
      CompanyIdMother.create(request.id),
      CompanyNameMother.create(request.name),
      CompanySocialReasonMother.create(request.socialReason),
      CompanyEmailMother.create(request.email),
      CompanyPrefixNumberMother.create(request.prefixNumber),
      CompanyNumberMother.create(request.number),
      CompanyStreetAddress1Mother.create(request.streetAddress1),
      CompanyStreetAddress2Mother.create(request.streetAddress2),
      CompanyPostalCodeMother.create(request.postalCode),
      CompanyCountryMother.create(request.country),
      CompanyCityMother.create(request.city),
      CompanyRegionMother.create(request.region),
      CompanyLatMother.create(request.lat),
      CompanyLongMother.create(request.long),
    );
  }

  static random(): Company {
    return this.create(
      CompanyIdMother.random(),
      CompanyNameMother.random(),
      CompanySocialReasonMother.random(),
      CompanyEmailMother.random(),
      CompanyPrefixNumberMother.random(),
      CompanyNumberMother.random(),
      CompanyStreetAddress1Mother.random(),
      CompanyStreetAddress2Mother.random(),
      CompanyPostalCodeMother.random(),
      CompanyCountryMother.random(),
      CompanyCityMother.random(),
      CompanyRegionMother.random(),
      CompanyLatMother.random(),
      CompanyLongMother.random(),
    );
  }
}
