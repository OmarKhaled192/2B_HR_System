import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VacationComponent } from './vacation/vacation.component';
import { DepartmentComponent } from './department/department.component';
import { BankComponent } from './bank/bank.component';
import { authGuard } from '../auth/auth.guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'vacation',
                component: VacationComponent,
                canActivate: [authGuard],
            },
            {
                path: 'department',
                component: DepartmentComponent,
                canActivate: [authGuard],
            },
            {
                path: 'bank',
                component: BankComponent,
                canActivate: [authGuard],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class InfoRoutingModule {}
