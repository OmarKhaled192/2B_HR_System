import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsComponent } from './icons/icons.component';
import { authGuard } from '../auth/auth.guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'icons',
                data: { breadcrumb: 'Prime Icons' },
                component: IconsComponent,
                canActivate: [authGuard],
            },
            { path: '**', redirectTo: '/notfound' },
        ]),
    ],
    exports: [RouterModule],
})
export class UtilitiesRoutingModule {}
