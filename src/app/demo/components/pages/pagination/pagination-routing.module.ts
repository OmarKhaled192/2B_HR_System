import { PaginationComponent } from './pagination.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: PaginationComponent }]),
    ],
    exports: [RouterModule],
})
export class PaginationRoutingModule {}
