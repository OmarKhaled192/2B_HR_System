import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { EmployeeService } from "./employee.service";
import { UploadEvent } from "primeng/fileupload";
import { Globals } from "src/app/class/globals";
import { TranslateService } from "@ngx-translate/core";
import { GlobalsModule } from "src/app/demo/modules/globals/globals.module";
import { PrimeNgModule } from "src/app/demo/modules/primg-ng/prime-ng.module";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-employee',
    standalone: true,
    imports: [
        GlobalsModule,
        PrimeNgModule,
    ],
    providers: [MessageService, DatePipe, TranslateService],
    templateUrl: './employee.component.html',
    styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
    selectedAttendanceConfiguration: any;
    constructor(
        private _EmployeeService: EmployeeService,
        private messageService: MessageService,
        private DatePipe: DatePipe
    ) {}

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
    selectedMachineCode: any = null;
    selectedNameAr: any = null;
    selectedEnglishName: any = null;
    selectedAddress: any = null;
    selectedJoininDate: any = null;
    selectedHirDate: any = null;
    selectedResignationDate: any = null;
    selectedDiscription: any = null;
    selectedPhone: any = null;
    selectedEmail: any = null;
    selectedBirthDate: any = null;
    selectedDepartment: any = null;
    selectedBloodType: any = null;

    selectedIsInsured: boolean = false;
    selectedIsManager: boolean = false;
    selectedIsStaticShift:boolean = false;
    selectedIsStaticVacation:boolean = false ;

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
    dropdownItemsAttendanceConfiguration:any;
    file: File = null;
    endPoint: string;
    selectedDeleteImage: boolean = false;
    // registerForm: FormData = new FormData();

    registerForm!: FormGroup;


    ngOnInit(): void {
        this.endPoint = 'Employee';

        // adding this Configurations in each Component Customized
        Globals.getMainLangChanges().subscribe((mainLang) => {
            console.log('Main language changed to:', mainLang);

            // update mainLang at Service
            this._EmployeeService.setCulture(mainLang);

            // update endpoint
            this._EmployeeService.setEndPoint(this.endPoint);

            // get All Drop Downs
            this.getAllDropDowns();

        });


        this.initFormGroups()
    }

    initFormGroups() {
        this.registerForm = new FormGroup({
            File: new FormControl(null), // Assuming File is handled differently
            NameAr: new FormControl(null, Validators.required),
            EnglishName: new FormControl(null, Validators.required),
            Address: new FormControl(null, Validators.required),
            Email: new FormControl(null, Validators.required),
            NationalId: new FormControl(null, Validators.required),
            Phone: new FormControl(null, Validators.required),
            MachineCode: new FormControl(null, Validators.required),
            Discription: new FormControl(null, Validators.required),
            BloodTypes: new FormControl(null, Validators.required),
            GovernmentId: new FormControl(null, Validators.required),
            QualificationId: new FormControl(null, Validators.required),
            AttendanceConfigurationId: new FormControl(null, Validators.required),
            Gender: new FormControl(null, Validators.required),
            MaritalStatus: new FormControl(null, Validators.required),
            JobId: new FormControl(null, Validators.required),
            JobNatureId: new FormControl(null, Validators.required),
            DepartmentId: new FormControl(null, Validators.required),
            PartationId: new FormControl(null, Validators.required),
            ShiftId: new FormControl(null, Validators.required),
            BankId: new FormControl(null, Validators.required),
            GradeId: new FormControl(null, Validators.required),
            ContractTypeId: new FormControl(null, Validators.required),
            RecuritmentSourceId: new FormControl(null, Validators.required),
            Religion: new FormControl(null, Validators.required),
            JoininDate: new FormControl(null, Validators.required),
            BirthDate: new FormControl(null, Validators.required),
            HirDate: new FormControl(null, Validators.required),
            ResignationDate: new FormControl(null, Validators.required),
            Ismanger: new FormControl(false, Validators.required),
            StaticShift: new FormControl(false, Validators.required),
            StaticVacation: new FormControl(false, Validators.required),
            IsInsured: new FormControl(false, Validators.required),
            DeleteImage: new FormControl(null),
        });
    }

    getAllDropDowns() {
        // Enum ===>
        // get Blood Type Dropdown
        this.getDropDownEnum({
            field: 'dropdownItemsBloodTypes',
            enum: 'getBloodTypes',
        });

        // get Gender Dropdown
        this.getDropDownEnum({
            field: 'dropdownItemsGender',
            enum: 'getGender',
        });

        // get MaritalStatus Dropdown
        this.getDropDownEnum({
            field: 'dropdownItemsMaritalStatus',
            enum: 'getMaritalStatus',
        });

        // get Religion Dropdown
        this.getDropDownEnum({
            field: 'dropdownItemsReligin',
            enum: 'getReligion',
        });



        // get Government Dropdown
        this.getDropDownField({
            field: 'dropdownItemsGovernment',
            enum: 'Government',
        });

        // get Qualification Dropdown
        this.getDropDownField({
            field: 'dropdownItemsQualification',
            enum: 'Qualification',
        });

        // get Attendance Configuration Dropdown
        this.getDropDownField({
            field: 'dropdownItemsAttendanceConfiguration',
            enum: 'AttendanceConfiguration',
        });

        // get Job Dropdown
        this.getDropDownField({ field: 'dropdownItemsJob', enum: 'Job' });

        // get Department Dropdown
        this.getDropDownField({
            field: 'dropdownItemsDepartment',
            enum: 'Department',
        });

        // get Partition Dropdown
        this.getDropDownField({
            field: 'dropdownItemsPartition',
            enum: 'Partation',
        });

        // get Shift Dropdown
        this.getDropDownField({ field: 'dropdownItemsShift', enum: 'Shift' });

        // get Bank Dropdown
        this.getDropDownField({ field: 'dropdownItemsBank', enum: 'Bank' });

        // get Grade Dropdown
        this.getDropDownField({ field: 'dropdownItemsGrade', enum: 'Grade' });

        // get JobNature Dropdown
        this.getDropDownField({
            field: 'dropdownItemsJobNature',
            enum: 'JobNature',
        });

        // get RecuritmentSource Dropdown
        this.getDropDownField({
            field: 'dropdownItemsRecuritmentSource',
            enum: 'RecuritmentSource',
        });

        // get ContactTypes Dropdown
        this.getDropDownField({
            field: 'dropdownItemsContractType',
            enum: 'ContractType',
        });

        // get Attendance Configuration Dropdown
        this.getDropDownField({
            field: 'dropdownItemsAttendanceConfiguration',
            enum: 'AttendanceConfiguration',
        });
    }

    getDropDownEnum(self: { field: any; enum: string }) {
        this._EmployeeService
            .getEnum(self.enum)
            .subscribe({
                next: (res) => {
                    this[self.field] = res.data;
                },
                error: (err) => {
                    // console.log(`error in ${self.field}`)
                    // console.log(err);
                },
            });
    }

    getDropDownField(self: { field: any; enum: string }) {
        this._EmployeeService.getDropdownField(self.enum).subscribe({
            next: (res) => {
                this[self.field] = res.data;
            },
            error: (err) => {
                // console.log(`error in ${self.field}`)
                // console.log(err);
            },
        });
    }

    onSelect(event: any) {
        console.log('event file');
        console.log(event);

        // assign file
        this.file = event.currentFiles[0];

        // this.registerForm.append('File', this.file);

        this.registerForm.patchValue({
            File: this.file
        })

        console.log('File');
        console.log(this.file);

        this.messageService.add({
            severity: 'info',
            summary: 'File Uploaded',
            detail: '',
        });
    }

    uploadedFiles: any[] = [];

    onUpload(event: UploadEvent) {
        for (let file of event?.["files"]) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({
            severity: 'info',
            summary: 'File Uploaded',
            detail: '',
        });
    }

    mapToFormData(body: any): FormData {
        const formData = new FormData();

        for (const key in body) {
            if (body.hasOwnProperty(key)) {
                const value = body[key];
                formData.append(key, value == null ? '' : value); // Append empty string for null values
            }
        }

        return formData;
    }

    registerSubmit() {

        console.log(this.registerForm.value)

        // const body = {
        //     NameAr: this.selectedNameAr,
        //     EnglishName: this.selectedEnglishName,
        //     Address: this.selectedAddress,
        //     Email: this.selectedEmail,
        //     NationalId: this.selectedNationalId,
        //     Phone: this.selectedPhone,
        //     MachineCode: this.selectedMachineCode,
        //     Discription: this.selectedDiscription,
        //     BloodTypes: this.selectedBloodType?.id,
        //     GovernmentId: this.selectedGovernment?.id,
        //     QualificationId: this.selectedQualification?.id,
        //     AttendanceConfigurationId: this.selectedAttendanceConfiguration?.id,
        //     Gender: this.selectedGender?.id,
        //     MaritalStatus: this.selectedMaritalStatus?.id,
        //     JobId: this.selectedJob?.id,
        //     JobNatureId: this.selectedjobNature?.id,
        //     DepartmentId: this.selectedDepartment?.id,
        //     PartationId: this.selectedPartitions?.id,
        //     ShiftId: this.selectedShift?.id,
        //     BankId: this.selectedBank?.id,
        //     GradeId: this.selectedGrade?.id,
        //     ContractTypeId: this.selectedContactType?.id,
        //     RecuritmentSourceId: this.selectedRecuritmentSource?.id,
        //     Religion: this.selectedReligin?.id,
        //     JoininDate: this.DatePipe.transform(this.selectedJoininDate, 'yyyy-MM-dd'),
        //     BirthDate: this.DatePipe.transform(this.selectedBirthDate, 'yyyy-MM-dd'),
        //     HirDate: this.DatePipe.transform(this.selectedHirDate, 'yyyy-MM-dd'),
        //     ResignationDate: this.DatePipe.transform(this.selectedResignationDate, 'yyyy-MM-dd'),
        //     Ismanger: this.selectedIsManager.toString(),
        //     StaticShift: this.selectedIsStaticShift.toString(),
        //     StaticVacation: this.selectedIsStaticVacation.toString(),
        //     IsInsured: this.selectedIsInsured.toString(),
        // };

        // // patch value of fields
        // this.registerForm.patchValue(body);


        // if(this.registerForm.valid) {

        //     // convert to formData before send a request
        //     const formData = this.mapToFormData(this.registerForm.value)

        //     this._EmployeeService.Register(formData).subscribe({
        //             next: (res) => {
        //                 console.log(res);
        //                 this.messageService.add({
        //                     severity: 'success',
        //                     summary: 'Success',
        //                     detail: 'item inserted successfully',
        //                     life: 3000,
        //                 });
        //             },

        //             error: (err) => {
        //                 console.error(err);
        //             },
        //         });
        //     }
    }

}
