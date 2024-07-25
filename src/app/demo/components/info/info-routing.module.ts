import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VacationComponent } from './vacation/vacation.component';
import { DepartmentComponent } from './department/department.component';
import { BankComponent } from './bank/bank.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'vacation', component: VacationComponent },
            { path: 'department', component: DepartmentComponent },
            { path: 'bank', component: BankComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class InfoRoutingModule {}
