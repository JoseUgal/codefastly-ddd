import { ICompanyCreatorRequest } from '../../../../../src/Contexts/Moas/Companies/application/interfaces/ICompanyCreatorRequest';
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
import { CompanyIdMother } from '../../Shared/Companies/CompanyIdMother';
import { CompanyCityMother } from '../domain/CompanyCityMother';
import { CompanyCountryMother } from '../domain/CompanyCountryMother';
import { CompanyEmailMother } from '../domain/CompanyEmailMother';
import { CompanyLatMother } from '../domain/CompanyLatMother';
import { CompanyLongMother } from '../domain/CompanyLongMother';
import { CompanyNameMother } from '../domain/CompanyNameMother';
import { CompanyNumberMother } from '../domain/CompanyNumberMother';
import { CompanyPostalCodeMother } from '../domain/CompanyPostalCodeMother';
import { CompanyPrefixNumberMother } from '../domain/CompanyPrefixNumberMother';
import { CompanyRegionMother } from '../domain/CompanyRegionMother';
import { CompanySocialReasonMother } from '../domain/CompanySocialReasonMother';
import { CompanyStreetAddress1Mother } from '../domain/CompanyStreetAddress1Mother';
import { CompanyStreetAddress2Mother } from '../domain/CompanyStreetAddress2Mother';

export class CreateCompanyRequestMother {
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
  ): ICompanyCreatorRequest {
    return {
      id: id.value,
      name: name.value,
      socialReason: socialReason.value,
      email: email.value,
      prefixNumber: prefixNumber.value,
      number: number.value,
      streetAddress1: streetAddress1.value,
      streetAddress2: streetAddress2.value,
      postalCode: postalCode.value,
      country: country.value,
      city: city.value,
      region: region.value,
      lat: lat.value,
      long: long.value,
    };
  }

  static random(): ICompanyCreatorRequest {
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
