import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VacationComponent } from './vacation/vacation.component';
import { DepartmentComponent } from './department/department.component';
import { BankComponent } from './bank/bank.component';
import { GovenmentComponent } from './govenment/govenment.component';
import { GradeComponent } from './grade/grade.component';
import { JobComponent } from './job/job.component';
import { LocationComponent } from './location/location.component';
import { PartitionComponent } from './partition/partition.component';
import { QualificationComponent } from './qualification/qualification.component';
import { RolesComponent } from './roles/roles.component';
import { ShiftComponent } from './shift/shift.component';
import { NotfoundComponent } from '../notfound/notfound.component';

@NgModule({
    
    imports: [
        RouterModule.forChild([
            { path: 'vacation', component: VacationComponent },
            { path: 'department', component: DepartmentComponent },
            { path: 'bank', component: BankComponent },
            { path: 'government', component: GovenmentComponent },
            { path: 'grade', component: GradeComponent },
            { path: 'job', component: JobComponent },
            { path: 'location', component: LocationComponent },
            { path: 'partition', component: PartitionComponent },
            { path: 'qualification', component: QualificationComponent },
            { path: 'roles', component: RolesComponent },
            { path: 'shift', component: ShiftComponent },
            { path: '**', component: NotfoundComponent}
        ]),
    ],
    exports: [RouterModule],
})
export class InfoRoutingModule {}
