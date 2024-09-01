import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
    let router = inject(Router);

    if (localStorage.getItem('userToken')) return true;
    else {
        router.navigate(['/auth/login']);
        return false;
    }

};
