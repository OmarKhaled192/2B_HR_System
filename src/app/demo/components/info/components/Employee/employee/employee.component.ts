import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { UIkitRoutingModule } from "src/app/demo/components/uikit/uikit-routing.module";
import { EmployeeService } from "./employee.service";
import { FormsModule } from "@angular/forms";
import { FormLayoutDemoRoutingModule } from "src/app/demo/components/uikit/formlayout/formlayoutdemo-routing.module";
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { InputSwitchModule } from "primeng/inputswitch";
import { FileUploadModule } from "primeng/fileupload";

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule,
    UIkitRoutingModule,
    FormsModule,
    FormLayoutDemoRoutingModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    InputSwitchModule,
    FileUploadModule
  ],
  providers: [MessageService],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
    constructor(
        private _EmployeeService: EmployeeService,
        private messageService: MessageService) {
    }

    selectedState: any = null;
    selectedGovernment: any = null;
    selectedNationalId: any = null;
    selectedPartitions: any = null;
    selectedGender: any = null;
    selectedMaritalStatus: any = null;
    selectedQualification: any = null;
    selectedJob: any = null;
    selectedReligin: any = null;
    selectedShift: any = null;
    selectedBank: any = null;
    selectedGrade: any = null;
    selectedjobNature: any = null;
    selectedRecuritmentSource: any = null;
    selectedContactType: any = null;
    selectedIsInsured: any = null;
    selectedIsManager: any = null;
    selectedDepartment: any =  null;
    selectedBloodType: any =  null;

    states: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];

    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];

    onUpload(evt: any) {
        
    }
}
