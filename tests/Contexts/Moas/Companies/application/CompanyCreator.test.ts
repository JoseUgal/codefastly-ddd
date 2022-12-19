import { CompanyCreator } from '../../../../../src/Contexts/Moas/Companies/application/CompanyCreator';
import { CompanyRepositoryMock } from '../__mocks__/CompanyRepositoryMock';
import { CreateCompanyRequestMother } from '../application/CreateCompanyRequestMother';
import { CompanyMother } from '../domain/CompanyMother';

describe('CompanyCreator', () => {
  let repository: CompanyRepositoryMock;
  let creator: CompanyCreator;

  beforeEach(() => {
    repository = new CompanyRepositoryMock();
    creator = new CompanyCreator(repository);
  });

  it('should create a valid company', async () => {
    const request = CreateCompanyRequestMother.random();

    const company = CompanyMother.fromRequest(request);

    await creator.run(request);

    repository.assertSaveHaveBeenCalledWith(company);
  });
});
