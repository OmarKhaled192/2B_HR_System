import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { PaginationRoutingModule } from './pagination-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { GovenmentComponent } from '../../info/govenment/govenment.component';
import { BankComponent } from '../../info/bank/bank.component';
import { DepartmentComponent } from '../../info/department/department.component';
import { GradeComponent } from '../../info/grade/grade.component';
import { JobComponent } from '../../info/job/job.component';
import { LocationComponent } from '../../info/location/location.component';
import { PartitionComponent } from '../../info/partition/partition.component';
import { QualificationComponent } from '../../info/qualification/qualification.component';
import { RolesComponent } from '../../info/roles/roles.component';
import { ShiftComponent } from '../../info/shift/shift.component';

@NgModule({
    declarations:
    [
        PaginationComponent,
        BankComponent,
        DepartmentComponent,
        GovenmentComponent,
        GradeComponent,
        JobComponent,
        LocationComponent,
        PartitionComponent,
        QualificationComponent,
        RolesComponent,
        ShiftComponent
    ],

    imports: [
        CommonModule,
        PaginationRoutingModule,
        NgxPaginationModule,
        ToolbarModule,
        TableModule,
        RippleModule,
        FileUploadModule,
        HttpClientModule,
        ButtonModule,
        FormsModule,
        DialogModule,
        ToastModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        ReactiveFormsModule,
    ],

    providers: [MessageService]
})
export class PaginationModule {}
