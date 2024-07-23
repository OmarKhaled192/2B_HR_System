import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VacationComponent } from './vacation/vacation.component';
import { DepartmentComponent } from './department/department.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'vacation', component: VacationComponent },
            { path: 'department', component: DepartmentComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class InfoRoutingModule {}
