/*
https://docs.nestjs.com/middleware#middleware
*/

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class FilterMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    // req.body.data = 'hello'    
    next();
  }
}
