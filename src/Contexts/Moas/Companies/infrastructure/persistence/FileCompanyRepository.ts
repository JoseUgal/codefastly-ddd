import { Company } from '../../domain/Company';
import { ICompanyRepository } from '../../domain/interfaces/ICompanyRepository';
import fs from 'fs/promises';
import { serialize } from 'bson';

export class FileCompanyRepository implements ICompanyRepository {
  private FILE_PATH = `${__dirname}/companies`;

  async save(company: Company): Promise<void> {
    fs.writeFile(this.filePath(company.id.value), serialize(company));
  }

  private filePath(id: string): string {
    return `${this.FILE_PATH}.${id}.repo`;
  }
}
