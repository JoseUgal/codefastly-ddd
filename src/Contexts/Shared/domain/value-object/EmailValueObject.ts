import { InvalidArgumentError } from './InvalidArgumentError';
import { StringValueObject } from './StringValueObject';

export class EmailValueObject extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureIsEmail(value);
  }

  private ensureIsEmail(email: string): void {
    const isValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    if (!isValid) throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${email}>`);
  }
}
