import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
    let router = inject(Router);
    const isLoggedIn = !!localStorage.getItem('userToken'); // Boolean check for the token

    console.log(isLoggedIn);
    console.log(state);

    // Prevent navigating back to the login page if already logged in
    if (isLoggedIn && state.url === '/auth/login') {
        router.navigate(['/']);
        return false;
    } 
  
    // If not logged in, redirect to login
    else if (!isLoggedIn && state.url !== '/auth/login') {
        router.navigate(['/auth/login']);
        return false;
    } else {
        return true;
    }
};
