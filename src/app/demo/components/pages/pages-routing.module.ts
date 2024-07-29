import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authGuard } from '../auth/auth.guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'crud',
                canActivate: [authGuard],
                loadChildren: () =>
                    import('./crud/crud.module').then((m) => m.CrudModule),
            },
            {
                path: 'empty',
                canActivate: [authGuard],
                loadChildren: () =>
                    import('./empty/emptydemo.module').then(
                        (m) => m.EmptyDemoModule
                    ),
            },
            {
                path: 'pagination',
                canActivate: [authGuard],
                loadChildren: () =>
                    import('./pagination/pagination.module').then(
                        (m) => m.PaginationModule
                    ),
            },
            {
                path: 'pagination-popup',
                canActivate: [authGuard],
                loadChildren: () =>
                    import('./pagination-popup/pagination-popup.module').then(
                        (m) => m.PaginationPopupModule
                    ),
            },
            {
                path: 'timeline',
                canActivate: [authGuard],
                loadChildren: () =>
                    import('./timeline/timelinedemo.module').then(
                        (m) => m.TimelineDemoModule
                    ),
            },
            { path: '**', redirectTo: '/notfound' },
        ]),
    ],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
