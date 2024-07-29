import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
    const token = localStorage.getItem('userToken') || '';

    const req = request.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`,
        },
    });

    return next(req);
};
