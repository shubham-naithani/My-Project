import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProgressBarService } from '../progress-bar.service'

@Injectable()
export class ProgressBarInterceptor implements HttpInterceptor {

  constructor(private progressBarServ: ProgressBarService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.progressBarServ.show();

    return next.handle(request).pipe(
      finalize(() => this.progressBarServ.hide()),
    );
  }
}
