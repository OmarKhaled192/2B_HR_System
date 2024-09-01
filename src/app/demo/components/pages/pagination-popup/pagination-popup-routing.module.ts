import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationPopupComponent } from './pagination-popup.component';

const routes: Routes = [];

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PaginationPopupComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class PaginationPopupRoutingModule {}
