import { Company } from '../../../../../src/Contexts/Moas/Companies/domain/Company';
import { ICompanyRepository } from '../../../../../src/Contexts/Moas/Companies/domain/interfaces/ICompanyRepository';

export class CompanyRepositoryMock implements ICompanyRepository {
  private saveMock: jest.Mock;

  constructor() {
    this.saveMock = jest.fn();
  }

  async save(company: Company): Promise<void> {
    this.saveMock(company);
  }

  assertSaveHaveBeenCalledWith(expectedCompany: Company): void {
    expect(this.saveMock).toHaveBeenCalledWith(expectedCompany);
  }
}
