import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { BankComponent } from './bank/bank.component';
import { GovenmentComponent } from './govenment/govenment.component';
import { GradeComponent } from './grade/grade.component';
import { JobComponent } from './job/job.component';
import { LocationComponent } from './location/location.component';
import { PartitionComponent } from './partition/partition.component';
import { QualificationComponent } from './qualification/qualification.component';
import { ShiftComponent } from './shift/shift.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { authGuard } from '../auth/auth.guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'department', canActivate: [authGuard], component: DepartmentComponent },
            { path: 'bank', canActivate: [authGuard], component: BankComponent },
            { path: 'government', canActivate: [authGuard], component: GovenmentComponent },
            { path: 'grade', canActivate: [authGuard], component: GradeComponent },
            { path: 'job', canActivate: [authGuard], component: JobComponent },
            { path: 'location', canActivate: [authGuard], component: LocationComponent },
            { path: 'partition', canActivate: [authGuard], component: PartitionComponent },
            { path: 'qualification', canActivate: [authGuard], component: QualificationComponent },
            { path: 'shift', canActivate: [authGuard], component: ShiftComponent },
            { path: '**', component: NotfoundComponent}
        ]),
    ],
    exports: [RouterModule],
})
export class InfoRoutingModule {}
