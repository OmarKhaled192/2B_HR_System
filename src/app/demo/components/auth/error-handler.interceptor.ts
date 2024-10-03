import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(
    private messageService: MessageService,
    private translate: TranslateService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // Check if the response contains 'success: false'
          if (event.body && event.body.success === false ) {
            console.log(event.body.message);
            
            this.messageService.add({
              severity: 'error',
              summary: this.translate.instant('Error'),
              detail: event.body.message || this.translate.instant('An Error Occurred'),
              life: 3000
            });
          }
        
        }
      }),
      catchError((error) => {
        // Handle any other errors here (like network issues, 500 status, etc.)
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('Error'),
          detail: this.translate.instant('An unexpected error occurred'),
          life: 3000
        });
        return throwError(error);
      })
   
    );
  }
}
