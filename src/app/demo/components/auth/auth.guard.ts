import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { MessageService } from 'primeng/api';
import { isArray } from 'lodash';

export const authGuard: CanActivateFn = (route, state) => {
    let router = inject(Router);
    let messageService = inject(MessageService);
    const token = localStorage.getItem('userToken') ; // Boolean check for the token

    // console.log(token);
    // console.log(state);

    let decodedToken = {};

    if(token) {
        decodedToken = jwtDecode(token) ;
        console.log("decoded Token Gurad => ", decodedToken?.['role'])
    }

    const Role = decodedToken?.['role'];

    // Prevent navigating back to the login page if already logged in
    if (token && state.url === '/auth/login') {
        router.navigate(['/']);
        return false;
    }

    // // If the user is an Employee, redirect to login
    if (token &&
        (
            Role === 'Employee'
            ||  (isArray(Role) && Role[0] == 'Employee' && Role.length == 1)
        )
         ) {
        localStorage.removeItem("userToken");
        messageService.add({
            severity: 'error',
            summary: 'Error, you are not authorized',
            detail: 'You must be an admin',
            life: 3000 // Show for 3 seconds
          });

        return false;
    }

    // If not logged in, redirect to login
    if (!token && state.url !== '/auth/login') {
        router.navigate(['/auth/login']);
        return false;
    }

    return true; // Allow navigation for other cases
};
