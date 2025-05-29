import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError, timer, of } from 'rxjs';
import { catchError, retryWhen, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor( public router: Router) { }

   getPathUrl(stringUrl) {
    let parsedUrl = new URL(stringUrl)
    return parsedUrl.pathname;
  }

  private shouldRetry = (error) => (error.status >= 500 && error.status !== 401 && error.status !== 412 && error.status !== 428);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { shouldRetry } = this;




    return next.handle(request).pipe(
      retryWhen(genericRetryStrategy({
        shouldRetry
      })),
      catchError(err => {
        if (err.status > 499 || err.status ==0) {
          this.router.navigate(['/error500'])
        }
        else if (err.status ==403 ) {
          this.router.navigate(['/error404'])
        }
        return throwError(err);

      }))

  }
}


export interface RetryParams {
  maxAttempts?: number;
  scalingDuration?: number;
  shouldRetry?: ({ status: number }) => boolean;
}

const defaultParams: RetryParams = {
  maxAttempts: 3,
  scalingDuration: 1500,
  shouldRetry: ({ status }) => status >= 400
}

export const genericRetryStrategy = (params: RetryParams = {}) => (attempts: Observable<any>) => attempts.pipe(
  mergeMap((error, i) => {
    const { maxAttempts, scalingDuration, shouldRetry } = { ...defaultParams, ...params }
    const retryAttempt = i + 1;

    if (retryAttempt > maxAttempts || !shouldRetry(error)) {
      return throwError(error);
    }
    return timer(retryAttempt * scalingDuration);
  })
);

export const ErrorInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
];