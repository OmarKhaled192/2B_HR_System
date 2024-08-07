import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DepartmentComponent } from './components/standard/department/department.component';
import { BankComponent } from './components/standard/bank/bank.component';
import { GovenmentComponent } from './components/standard/govenment/govenment.component';
import { LocationComponent } from './components/custom/location/location.component';
import { PartitionComponent } from './components/custom/partition/partition.component';
import { QualificationComponent } from './components/standard/qualification/qualification.component';
import { ShiftComponent } from './components/custom/shift/shift.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { authGuard } from '../auth/auth.guard';
import { PublicVacationComponent } from './components/custom/public-vacation/public-vacation.component';
import { ShiftVacationComponent } from './components/custom/shift-vacation/shift-vacation.component';
import { GradeComponent } from './components/standard/grade/grade.component';
import { JobComponent } from './components/standard/job/job.component';
import { RelativeRelationComponent } from './components/custom/relative-relation/relative-relation.component';
import { ContractTypeComponent } from './components/standard/contract-type/contract-type.component';
import { JobNatureComponent } from './components/standard/job-nature/job-nature.component';
import { RecuritmentSourceComponent } from './components/standard/recuritment-source/recuritment-source.component';
import { DocumentRequiredComponent } from './components/standard/document-required/document-required.component';
import { UniformCodesComponent } from './components/standard/uniform-codes/uniform-codes.component';
import { VacationSettingComponent } from './components/custom/vacation-setting/vacation-setting.component';
import { CovenantCategoryComponent } from './components/standard/covenant-category/covenant-category.component';
import { CovenantComponent } from './components/custom/covenant/covenant.component';

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
            { path: 'publicVacation', canActivate: [authGuard], component: PublicVacationComponent },
            { path: 'shiftVacation', canActivate: [authGuard], component: ShiftVacationComponent },
            { path: 'relativeRelation', canActivate: [authGuard], component: RelativeRelationComponent },
            { path: 'contractType', canActivate: [authGuard], component: ContractTypeComponent },
            { path: 'jobNature', canActivate: [authGuard], component: JobNatureComponent },
            { path: 'recuritmentSource', canActivate: [authGuard], component: RecuritmentSourceComponent },
            { path: 'documentRequired', canActivate: [authGuard], component: DocumentRequiredComponent },
            { path: 'uniformCodes', canActivate: [authGuard], component: UniformCodesComponent },
            { path: 'vacationSetting', canActivate: [authGuard], component: VacationSettingComponent },
            { path: 'CovenantCategory', canActivate: [authGuard], component: CovenantCategoryComponent },
            { path: 'Covenant', canActivate: [authGuard], component: CovenantComponent },
            { path: '**', component: NotfoundComponent}
        ]),
    ],
    exports: [RouterModule],
})
export class InfoRoutingModule {}
