import { CommonModule, DatePipe, FormStyle } from "@angular/common";
import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { UIkitRoutingModule } from "src/app/demo/components/uikit/uikit-routing.module";
import { EmployeeService } from "./employee.service";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { ToastModule } from "primeng/toast";
import { Globals } from "src/app/class/globals";

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule,
    UIkitRoutingModule,
    FormsModule,
    FormLayoutDemoRoutingModule,
    ReactiveFormsModule,
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
    FileUploadModule,
    ToastModule,
    DatePipe
  ],
  providers: [MessageService, DatePipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
    constructor(
        private _EmployeeService: EmployeeService,
        private messageService: MessageService,
        private DatePipe: DatePipe
    ) {
    }

    // selected Items
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

    selectedIsInsured: boolean = false;
    selectedIsManager: boolean = false;

    selectedDepartment: any =  null;
    selectedBloodType: any =  null;

    // => dropdown Arrays

    // = Enums
    dropdownItemsReligin: any;
    dropdownItemsMaritalStatus: any;
    dropdownItemsBloodTypes: any;
    dropdownItemsGender: any;

    // = dropdowns
    dropdownItemsGovernment: any;
    dropdownItemsQualification: any;
    dropdownItemsJob: any;
    dropdownItemsDepartment: any;
    dropdownItemsPartition: any;
    dropdownItemsShift: any;
    dropdownItemsBank: any;
    dropdownItemsGrade: any;
    dropdownItemsJobNature: any;
    dropdownItemsRecuritmentSource: any;
    dropdownItemsContractType: any;
    file: File;
    endPoint: string;

    // main register form
    registerForm: FormGroup = new FormGroup({
        NameAr: new FormControl(null),
        EnglishName: new FormControl(null),
        Address: new FormControl(null),
        BirthDate: new FormControl(null),
        BloodTypes: new FormControl(null),
        DepartmentId: new FormControl(null),
        Gender: new FormControl(null),
        GovernmentId: new FormControl(null),
        HirDate: new FormControl(null),
        JobId: new FormControl(null),
        JoininDate: new FormControl(null),
        MaritalStatus: new FormControl(null),
        NationalId: new FormControl(null),
        PartationId: new FormControl(null),
        Phone: new FormControl(null),
        QualificationId: new FormControl(null),
        ShiftId: new FormControl(null),
        Email: new FormControl(null),
        ImageUrl: new FormControl(null),
        DeleteImage: new FormControl(null),
        File: new FormControl(null),
        ResignationDate: new FormControl(null),
        Ismanager: new FormControl(null),
        Discription: new FormControl(null),
        IsInsured: new FormControl(null),
        Religion: new FormControl(null),
        BankId: new FormControl(null),
        GradeId: new FormControl(null),
        MachineCode: new FormControl(null),
        JobNatureId: new FormControl(null),
        RecuritmentSourceId: new FormControl(null),
        ContractTypeId: new FormControl(null),
    });

    ngOnInit(): void {

        this.endPoint = 'Employee';

        // adding this Configurations in each Component Customized
        Globals.getMainLangChanges().subscribe((mainLang) => {
            console.log('Main language changed to:', mainLang);

            // update mainLang at Service
            this._EmployeeService.setCulture(mainLang);

            // update endpoint
            this._EmployeeService.setEndPoint(this.endPoint);

        });

        // Enum ===>
        // get Blood Type Dropdown
        this.getDropDownEnum({ field: 'dropdownItemsBloodTypes', enum: 'getBloodTypes' });

        // get Gender Dropdown
        this.getDropDownEnum({ field: 'dropdownItemsGender', enum: 'getGender' });

        // get MaritalStatus Dropdown
        this.getDropDownEnum({ field: 'dropdownItemsMaritalStatus', enum: 'getMaritalStatus' });

        // get Religion Dropdown
        this.getDropDownEnum({ field: 'dropdownItemsReligin', enum: 'getReligion' });

        // ==========================================================================

        // get Dropdown ==>
        // get Blood Type Dropdown
        this.getDropDownField({ field: 'dropdownItemsReligin', enum: 'getReligion' });

        // get Government Dropdown
        this.getDropDownField({ field: 'dropdownItemsGovernment', enum: 'Government' });

        // get Qualification Dropdown
        this.getDropDownField({ field: 'dropdownItemsQualification', enum: 'Qualification' });

        // get Job Dropdown
        this.getDropDownField({ field: 'dropdownItemsJob', enum: 'Job' });

        // get Department Dropdown
        this.getDropDownField({ field: 'dropdownItemsDepartment', enum: 'Department' });

        // get Partition Dropdown
        this.getDropDownField({ field: 'dropdownItemsPartition', enum: 'Partation' });

        // get Shift Dropdown
        this.getDropDownField({ field: 'dropdownItemsShift', enum: 'Shift' });

        // get Bank Dropdown
        this.getDropDownField({ field: 'dropdownItemsBank', enum: 'Bank' });

        // get Grade Dropdown
        this.getDropDownField({ field: 'dropdownItemsGrade', enum: 'Grade' });

        // get JobNature Dropdown
        this.getDropDownField({ field: 'dropdownItemsJobNature', enum: 'JobNature' });

        // get RecuritmentSource Dropdown
        this.getDropDownField({ field: 'dropdownItemsRecuritmentSource', enum: 'RecuritmentSource' });

        // get ContactTypes Dropdown
        this.getDropDownField({ field: 'dropdownItemsContractType', enum: 'ContractType' });

    }

    getDropDownEnum( self: { field: any , enum: string}) {
        this._EmployeeService.getEnum(self.enum).subscribe({
          next: (res) => {
            this[self.field] = res.data;
          },
          error: (err) => {
            console.log(`error in ${self.field}`)
            console.log(err);
          }
        });
    }

    getDropDownField( self: { field: any , enum: string}) {
        this._EmployeeService.getDropdownField(self.enum).subscribe({
          next: (res) => {
            this[self.field] = res.data;
          },
          error: (err) => {
            console.log(`error in ${self.field}`)
            console.log(err);
          }
        });
    }

    onSelect(event: any) {
        console.log("event file")
        console.log(event);

        // assign file
        this.file = event.currentFiles[0];

        console.log("file")
        console.log(this.file );

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }



    registerSubmit(registerForm: FormGroup) {

        registerForm.patchValue({
            File: this.file,
            BloodTypes: this.selectedBloodType?.id,
            GovernmentId: this.selectedGovernment?.id,
            QualificationId: this.selectedQualification?.id,
            Gender: this.selectedGender?.id,
            MaritalStatus: this.selectedMaritalStatus?.id,
            JobId: this.selectedJob?.id,
            JobNatureId: this.selectedjobNature?.id,
            DepartmentId: this.selectedDepartment?.id,
            PartationId: this.selectedPartitions?.id,
            ShiftId: this.selectedShift?.id,
            BankId: this.selectedBank?.id,
            GradeId: this.selectedGrade?.id,
            ContractTypeId: this.selectedContactType?.id,
            RecuritmentSourceId: this.selectedRecuritmentSource?.id,
            Religion: this.selectedReligin?.id,

            JoininDate: this.DatePipe.transform(
                this.registerForm.get("JoininDate").value , 'yyyy-MM-ddTHH:mm:ss'
            ),

            BirthDate: this.DatePipe.transform(
                this.registerForm.get("BirthDate").value , 'yyyy-MM-ddTHH:mm:ss'
            ),

            HirDate: this.DatePipe.transform(
                this.registerForm.get("HirDate").value , 'yyyy-MM-ddTHH:mm:ss'
            ),

            ResignationDate: this.DatePipe.transform(
                this.registerForm.get("ResignationDate").value , 'yyyy-MM-ddTHH:mm:ss'
            ),

        })

        console.log(registerForm.value);
        this._EmployeeService.Register(registerForm.value).subscribe({
            next: (res)=> {
                console.log(res)
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'items deleted successfully',
                    life: 3000,
                });
            },

            error: (err) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Failure',
                    detail: err.statusText,
                    life: 3000,
                });
            }
        })


    }
}
