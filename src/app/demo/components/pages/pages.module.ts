import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PaginationModule } from './pagination/pagination.module';

@NgModule({
    declarations: [],

    imports: [
        CommonModule,
        PagesRoutingModule,
        PaginationModule
    ]
})
export class PagesModule { }
