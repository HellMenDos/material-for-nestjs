import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Request } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const http = context.switchToHttp()
    const req: Request = http.getRequest()
    console.log(req)
    return next
      .handle()
      .pipe(
        map(() => req.body),
      );
  }
}
