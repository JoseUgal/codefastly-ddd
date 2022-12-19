import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { CompanyCreator } from '../../../../Contexts/Moas/Companies/application/CompanyCreator';
import { Controller } from './Controller';

type CompanyPutRequest = Request & {
  body: {
    id: string;
    name: string;
    socialReason: string;
    email: string;
    prefixNumber: string;
    number: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    region: string;
    country: string;
    postalCode: string;
    lat: number;
    long: number;
  };
};

export class CompaniesPutController implements Controller {
  constructor(private companyCreator: CompanyCreator) {}

  async run(req: CompanyPutRequest, res: Response): Promise<void> {
    const {
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
    } = req.body;

    await this.companyCreator.run({
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
    });

    res.sendStatus(httpStatus.CREATED).send();
  }
}
