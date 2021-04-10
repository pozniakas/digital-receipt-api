import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const headers = request.rawHeaders as string[];
    const secretIdx = headers.indexOf('AUTH_SECRET');

    return headers[secretIdx + 1] === process.env.AUTH_SECRET;
  }
}
