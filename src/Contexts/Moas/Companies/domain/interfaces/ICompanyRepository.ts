import { Company } from '../Company';

export interface ICompanyRepository {
  save(company: Company): Promise<void>;
}
