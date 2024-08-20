import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
    const token = localStorage.getItem('userToken') || '';
    const router = inject(Router);

    const req = request.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`,
        },
    });

    return next(req).pipe(
        catchError((error) => {
            if (error.status === 401 || error.status === 500) {
                // Check if the request is to the login endpoint
                if (request.url.includes('/auth/login')) {
                    // If the request is to the login endpoint, return the error
                    return throwError(
                        () =>
                            new Error(
                                `Error ${error.status}: ${
                                    error.error.message || error.statusText
                                }`
                            )
                    );
                } else {
                    // If the request is not to the login endpoint, redirect to the login page
                    router.navigate(['/auth/login']);
                    return throwError(
                        () =>
                            new Error(
                                `Error ${error.status}: ${
                                    error.error.message || error.statusText
                                }`
                            )
                    );
                }
            }
            return throwError(
                () =>
                    new Error(
                        `Error ${error.status}: ${
                            error.error.message || error.statusText
                        }`
                    )
            );
        })
    );
};
