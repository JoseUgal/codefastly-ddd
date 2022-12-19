import { CompanyId } from '../../Shared/domain/Companies/CompanyId';
import { CompanyCity } from './CompanyCity';
import { CompanyCountry } from './CompanyCountry';
import { CompanyEmail } from './CompanyEmail';
import { CompanyLat } from './CompanyLat';
import { CompanyLong } from './CompanyLong';
import { CompanyName } from './CompanyName';
import { CompanyNumber } from './CompanyNumber';
import { CompanyPostalCode } from './CompanyPostalCode';
import { CompanyPrefixNumber } from './CompanyPrefixNumber';
import { CompanyRegion } from './CompanyRegion';
import { CompanySocialReason } from './CompanySocialReason';
import { CompanyStreetAddress1 } from './CompanyStreetAddress1';
import { CompanyStreetAddress2 } from './CompanyStreetAddress2';

export class Company {
  readonly id: CompanyId;
  readonly name: CompanyName;
  readonly socialReason: CompanySocialReason;
  readonly email: CompanyEmail;
  readonly prefixNumber: CompanyPrefixNumber;
  readonly number: CompanyNumber;
  readonly streetAddress1: CompanyStreetAddress1;
  readonly streetAddress2: CompanyStreetAddress2;
  readonly city: CompanyCity;
  readonly region: CompanyRegion;
  readonly country: CompanyCountry;
  readonly postalCode: CompanyPostalCode;
  readonly lat: CompanyLat;
  readonly long: CompanyLong;

  constructor({
    id,
    name,
    socialReason,
    email,
    prefixNumber,
    number,
    streetAddress1,
    streetAddress2,
    city,
    region,
    country,
    postalCode,
    lat,
    long,
  }: ICompany) {
    this.id = id;
    this.name = name;
    this.socialReason = socialReason;
    this.email = email;
    this.prefixNumber = prefixNumber;
    this.number = number;
    this.streetAddress1 = streetAddress1;
    this.streetAddress2 = streetAddress2;
    this.city = city;
    this.region = region;
    this.country = country;
    this.postalCode = postalCode;
    this.lat = lat;
    this.long = long;
  }
}

interface ICompany {
  id: CompanyId;
  name: CompanyName;
  socialReason: CompanySocialReason;
  email: CompanyEmail;
  prefixNumber: CompanyPrefixNumber;
  number: CompanyNumber;
  streetAddress1: CompanyStreetAddress1;
  streetAddress2: CompanyStreetAddress2;
  city: CompanyCity;
  region: CompanyRegion;
  country: CompanyCountry;
  postalCode: CompanyPostalCode;
  lat: CompanyLat;
  long: CompanyLong;
}
