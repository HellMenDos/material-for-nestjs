import { Injectable, CanActivate, ExecutionContext, Request } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const http = context.switchToHttp()
    const req: Request = http.getRequest()
    
    if(req.headers['authorization'] == '111') {
      return true;
    }

    return false;
  }
}
