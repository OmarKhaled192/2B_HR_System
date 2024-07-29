import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'crud',
                loadChildren: () =>
                    import('./crud/crud.module').then((m) => m.CrudModule),
            },
            {
                path: 'empty',
                loadChildren: () =>
                    import('./empty/emptydemo.module').then(
                        (m) => m.EmptyDemoModule
                    ),
            },
            {
                path: 'pagination',
                loadChildren: () =>
                    import('./pagination/pagination.module').then(
                        (m) => m.PaginationModule
                    ),
            },
            {
                path: 'pagination-popup',
                loadChildren: () =>
                    import('./pagination-popup/pagination-popup.module').then(
                        (m) => m.PaginationPopupModule
                    ),
            },
            {
                path: 'timeline',
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
