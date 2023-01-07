import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

export class TransformPipe implements PipeTransform {
  constructor(public prefix) {}

  transform(value: any, metadata: ArgumentMetadata) {
    return `${this.prefix}__${value}`;
  }
}
