import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
   
    const token = localStorage.getItem('userToken') ;
    const router = inject(Router);
    if (token) {
    const decodedToken = jwtDecode(token)  ;
    const curDate = new Date(); // Get current date and time
    const expDate: Date = new Date(decodedToken.exp * 1000);  // Convert token expiration to Date
   
    console.log('Expiration Date:', expDate);
    console.log('Current Date:', curDate);
    
    // Check if the token has expired
    if (expDate < curDate) {
        console.log('Token has expired.');
        localStorage.removeItem('userToken');
        router.navigate(['/auth/login'])
    } 
}


    const req = request.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`,
        },
    });

    return next(req).pipe(
        catchError((error) => {
            if (error.status === 401) {
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
