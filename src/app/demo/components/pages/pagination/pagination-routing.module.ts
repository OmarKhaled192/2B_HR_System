import { PaginationComponent } from './pagination.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { DepartmentComponent } from './department/department.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: PaginationComponent }]),
        RouterModule.forChild([{ path: 'bank', component: BankComponent }]),
        RouterModule.forChild([{ path: 'department', component: DepartmentComponent }]),
    ],
    exports: [RouterModule],
})
export class PaginationRoutingModule {}
