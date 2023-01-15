import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ModifyPrefixPipe implements PipeTransform {
  constructor(public prefix: string) {}

  transform(value: any, metadata: ArgumentMetadata) {
    return `${this.prefix}__${value}`;
  }
}
