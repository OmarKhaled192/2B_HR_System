import { environment } from './../../../../../../environments/environment';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
    Component,
    ElementRef,
    Input,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { Table, TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { Globals } from 'src/app/class/globals';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeEditService } from './employee-edit.service';
import { map, Observable, tap } from 'rxjs';
interface UploadEvent {
    originalEvent: Event;
    files: File[];
}
@Component({
    selector: 'app-employee-edit',
    standalone: true,
    imports: [
        CommonModule,
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
        TranslateModule,
        BadgeModule,
        PanelModule,
        ProgressBarModule,
        CalendarModule,
        InputSwitchModule,
        DatePipe,
        FileUploadModule,
        RouterModule,
    ],
    providers: [MessageService, DatePipe],
    templateUrl: './employee-edit.component.html',
    styleUrl: './employee-edit.component.scss',
})
export class EmployeeEditComponent {
    constructor(
        private employeeEditService: EmployeeEditService,
        private messageService: MessageService,
        private DatePipe: DatePipe,
        private router: Router,
        private route: ActivatedRoute,
        private activatedRoute: ActivatedRoute
    ) {}

    @ViewChild('dt') dt: Table;
    @Input() endPoint!: string;
    @ViewChild('manageItems') manageItems: ElementRef;
    allData: any = [];
    page: number = 1;
    itemsPerPage = 10;
    selectedItems: any = [];
    cols: any[] = [];
    totalItems: any;
    loading: boolean = true;
    nameFilter: string;
    deleteProductDialog: boolean = false;
    deleteProductsDialog: boolean = false;
    submitted: boolean = false;
    productDialog: boolean = false;
    product: any;
    event!: any;
    newName!: string;
    newNotes!: string;
    showFormNew: boolean = false;
    sortField: string = 'id';
    sortOrder: string = 'asc';
    newNameAr!: string;
    newNameEn!: string;
    selectedState: any = null;
    selectedGovernment!: any;
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
    selectedDepartment: any = null;
    selectedBloodType: any = null;
    filterData!: FormGroup;
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
    imageUrl!: string;

    uploadedFiles: any[] = [];
    files: File[];
    currentId!: number;
    birthDate!: any;
    joinInDate!: any;
    hiringData!: any;
    resignationDate!: any;
    address!: string;
    discription!: string;
    email!: string;
    englishName!: string;
    nameAr!: string;
    machineCode!: any;
    nationalId!: any;
    phone!: any;
    baseImgUrl: string = environment.mediaUrl;

    editForm: FormGroup = new FormGroup({
        Id: new FormControl({ value: this.currentId, disabled: true }),
        BirthDate: new FormControl(),
        BloodTypes: new FormControl(),
        DepartmentId: new FormControl(),
        Gender: new FormControl(),
        GovernmentId: new FormControl(),
        HirDate: new FormControl(),
        JobId: new FormControl(),
        JoininDate: new FormControl(),
        MaritalStatus: new FormControl(),
        PartationId: new FormControl(),
        QualificationId: new FormControl(),
        ShiftId: new FormControl(),
        ResignationDate: new FormControl(),
        Ismanger: new FormControl(),
        IsInsured: new FormControl(),
        Religion: new FormControl(),
        BankId: new FormControl(),
        GradeId: new FormControl(),
        JobNatureId: new FormControl(),
        RecuritmentSourceId: new FormControl(),
        ContractTypeId: new FormControl(),
        Address: new FormControl(),
        Discription: new FormControl(),
        Email: new FormControl(),
        EnglishName: new FormControl(),
        NameAr: new FormControl(),
        MachineCode: new FormControl(),
        NationalId: new FormControl(),
        Phone: new FormControl(),
        // imageUrl: new FormControl(),
    });

    // Actions Tabs variable
    Actions: any;
    selectedAction: any;

    ngOnInit() {

        this.currentId = this.route.snapshot.params['id'];

        console.log('Current Id : ', this.currentId);

        this.endPoint = 'Employee';
        // adding this Configurations in each Component Customized
        Globals.getMainLangChanges().subscribe((mainLang) => {
            console.log('Main language changed to:', mainLang);

            // update mainLang at Service
            this.employeeEditService.setCulture(mainLang);

            // update endpoint
            this.employeeEditService.setEndPoint(this.endPoint);

            // then, load data again to lens on the changes of mainLang & endPoints Call
        });

        this.cols = [
            // basic data
            { field: 'name', header: 'Name' },
            { field: 'notes', header: 'Notes' },

            // Generic Fields
            { field: 'creationTime', header: 'creationTime' },
            { field: 'lastModificationTime', header: 'lastModificationTime' },
            { field: 'creatorName', header: 'creatorName' },
            { field: 'lastModifierName', header: 'lastModifierName' },
        ];
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

        // ==========================================================================

        // get Dropdown ==>
        // get Blood Type Dropdown
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

        console.log('dropdownItemsGrade : ', this.dropdownItemsGrade);

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

        this.getData();
        this.getData()
            .pipe(
                tap((data) => {
                    this.allData = data.data;
                    console.log('Data fetched:', this.allData);

                    // Perform any additional operations if needed
                    // ...
                }),
                map((data) => {
                    // Compute transformedDates here
                    return {
                        birthDate: this.DatePipe.transform(
                            data.data.birthDate,
                            'MM/dd/yyyy'
                        ),
                        joinInDate: this.DatePipe.transform(
                            data.data.joininDate,
                            'MM/dd/yyyy'
                        ),
                        hiringData: this.DatePipe.transform(
                            data.data.hirDate,
                            'MM/dd/yyyy'
                        ),
                        resignationDate: this.DatePipe.transform(
                            data.data.resignationDate,
                            'MM/dd/yyyy'
                        ),
                    };
                })
            )
            .subscribe((transformedDates) => {
                console.log('transformedDates');
                console.log(transformedDates);

                this.patchFormValues(this.allData, transformedDates);
            });

        const transformedDates = {
            birthDate: this.DatePipe.transform(
                this.allData.birthDate,
                'MM/dd/yyyy'
            ),
            joinInDate: this.DatePipe.transform(
                this.allData.joininDate,
                'MM/dd/yyyy'
            ),
            hiringData: this.DatePipe.transform(
                this.allData.hirDate,
                'MM/dd/yyyy'
            ),
            resignationDate: this.DatePipe.transform(
                this.allData.resignationDate,
                'MM/dd/yyyy'
            ),
        };
        this.patchFormValues(this.allData, transformedDates);


        this.Actions = [
            {
                id: 1,
                name: 'Employee Certificates',
                action: 'EmployeeCertification',
            },
            {
                id: 2,
                name: 'Employee Course',
                action: 'EmployeeCourse',
            },
            {
                id: 3,
                name: 'Employee Covenent',
                action: 'EmployeeCovenant',
            },
            {
                id: 4,
                name: 'Employee Experience',
                action: 'EmployeeExperience',
            },
            {
                id: 5,
                name: 'Employee Family',
                action: 'EmployeeFamily',
            },
            {
                id: 6,
                name: 'Employee File',
                action: 'EmployeeFile',
            },
            {
                id: 7,
                name: 'Employee Location',
                action: 'EmployeeLocation',
            },
            {
                id: 8,
                name: 'Employee Manager',
                action: 'EmployeeManager',
            },
            {
                id: 9,
                name: 'Employee Salary',
                action: 'EmployeeSalary',
            },
            {
                id: 10,
                name: 'Employee Uniform',
                action: 'EmployeeUniform',
            },
            {
                id: 11,
                name: 'Employee Vacation Stock',
                action: 'EmployeeVacationStock',
            },
        ];
    }

    changeTab() {
        console.log(this.selectedAction)
         this.router.navigate([this.selectedAction.action], { relativeTo: this.route });
    }

    patchFormValues(data: any, transformedDates: any) {
        // console.clear();
        console.log('data => ', data);

        this.selectedReligin = this.getObject(
            data.religion,
            this.dropdownItemsReligin
        );
        console.log('this.selectedReligin : ', this.selectedReligin);

        this.selectedGovernment = this.getObject(
            data.governmentId,
            this.dropdownItemsGovernment
        );
        console.log('this.selectedGovernment : ', this.selectedGovernment);

        this.selectedMaritalStatus = this.getObject(
            data.maritalStatus,
            this.dropdownItemsMaritalStatus
        );
        console.log(
            'this.selectedMaritalStatus : ',
            this.selectedMaritalStatus
        );

        this.selectedBloodType = this.getObject(
            data.bloodTypes,
            this.dropdownItemsBloodTypes
        );
        console.log('this.selectedBloodType : ', this.selectedBloodType);

        this.selectedGender = this.getObject(
            data.gender,
            this.dropdownItemsGender
        );
        console.log('this.selectedGender : ', this.selectedGender);

        this.selectedQualification = this.getObject(
            data.qualificationId,
            this.dropdownItemsQualification
        );
        console.log(
            'this.selectedQualification : ',
            this.selectedQualification
        );

        this.selectedJob = this.getObject(data.jobId, this.dropdownItemsJob);
        console.log('this.selectedJob : ', this.selectedJob);
        this.selectedDepartment = this.getObject(
            data.departmentId,
            this.dropdownItemsDepartment
        );
        console.log('this.selectedDepartment : ', this.selectedDepartment);

        this.selectedPartitions = this.getObject(
            data.partationId,
            this.dropdownItemsPartition
        );
        console.log('this.selectedPartitions : ', this.selectedPartitions);
        this.selectedShift = this.getObject(
            data.shiftId,
            this.dropdownItemsShift
        );

        console.log('this.selectedShift : ', this.selectedShift);

        this.selectedBank = this.getObject(data.bankId, this.dropdownItemsBank);
        console.log('this.selectedBank : ', this.selectedBank);

        this.selectedGrade = this.getObject(
            data.gradeId,
            this.dropdownItemsGrade
        );

        this.selectedGrade = data.gradeId;
        console.log('this.selectedGrade : ', this.selectedGrade);

        this.selectedjobNature = this.getObject(
            data.jobNatureId,
            this.dropdownItemsJobNature
        );
        console.log('this.selectedjobNature : ', this.selectedjobNature);

        this.selectedIsInsured = data.isInsured;
        this.selectedIsManager = data.ismanger;
        this.selectedRecuritmentSource = this.getObject(
            data.recuritmentSourceId,
            this.dropdownItemsRecuritmentSource
        );

        console.log(
            'this.selectedRecuritmentSource : ',
            this.selectedRecuritmentSource
        );

        this.selectedContactType = this.getObject(
            data.contractTypeId,
            this.dropdownItemsContractType
        );
        console.log('this.selectedContactType : ', this.selectedContactType);

        // Apply transformed dates
        this.birthDate = transformedDates.birthDate;
        this.joinInDate = transformedDates.joinInDate;
        this.hiringData = transformedDates.hiringData;
        this.resignationDate = transformedDates.resignationDate;

        // Set other data fields
        this.address = data.address;
        this.nameAr = data.nameAr;
        this.englishName = data.englishName;
        this.discription = data.discription;
        this.nationalId = data.nationalId;
        this.phone = data.phone;
        this.machineCode = data.machineCode;
        this.email = data.email;
    }

    getDropDownEnum(self: { field: any; enum: string }) {
        this.employeeEditService.getEnum(self.enum).subscribe({
            next: (res) => {
                this[self.field] = res.data;
            },
            error: (err) => {
                console.log(`error in ${self.field}`);
                console.log(err);
            },
        });
    }

    getDropDownField(self: { field: any; enum: string }) {
        this.employeeEditService.getDropdownField(self.enum).subscribe({
            next: (res) => {
                this[self.field] = res.data;
            },
            error: (err) => {
                console.log(`error in ${self.field}`);
                console.log(err);
            },
        });
    }

    // onSelect(evt: any) {
    //     console.log(evt);
    //     this.messageService.add({
    //         severity: 'info',
    //         summary: 'File Uploaded',
    //         detail: '',
    //     });
    // }

    getObject(id: number, dropdown: any) {
        if (dropdown) return dropdown.find((item: any) => item.id == id);
    }

    submitForm(formData: FormGroup) {
        formData.patchValue({
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
                this.editForm.get('JoininDate').value,
                'yyyy-MM-dd'
            ),

            BirthDate: this.DatePipe.transform(
                this.editForm.get('BirthDate').value,
                'yyyy-MM-dd'
            ),

            HirDate: this.DatePipe.transform(
                this.editForm.get('HirDate').value,
                'yyyy-MM-dd'
            ),

            ResignationDate: this.DatePipe.transform(
                this.editForm.get('ResignationDate').value,
                'yyyy-MM-dd'
            ),
        });
        this.editForm.get('Id').enable();

        console.log(formData.value);

        let newFormData: FormData = new FormData();
        let body = formData.value;
        for (const key in body) {
            if (body.hasOwnProperty(key)) {
                newFormData.append(key, body[key]);
            }
        }

        this.employeeEditService.Edit(newFormData).subscribe({
            next: (res) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Employee Edited Successfully',
                });
                console.log(res);
                this.editForm.get('Id').disable();
                // this.employeeEditService.GetById(this.currentId).subscribe({
                //     next: (res) => {
                //         this.allData = res.data;
                //         console.clear();
                //         console.log('allData : ');
                //         console.log(this.allData);
                this.birthDate = this.DatePipe.transform(
                    this.editForm.get('BirthDate').value,
                    'MM/dd/yyyy'
                );
                this.selectedReligin = this.getObject(
                    this.editForm.get('Religion').value,
                    this.dropdownItemsReligin
                );
                this.selectedGovernment = this.getObject(
                    this.editForm.get('GovernmentId').value,
                    this.dropdownItemsGovernment
                );
                this.selectedMaritalStatus = this.getObject(
                    this.editForm.get('MaritalStatus').value,
                    this.dropdownItemsMaritalStatus
                );

                this.selectedBloodType = this.getObject(
                    this.editForm.get('BloodTypes').value,
                    this.dropdownItemsBloodTypes
                );
                this.selectedGender = this.getObject(
                    this.editForm.get('Gender').value,
                    this.dropdownItemsGender
                );
                this.selectedQualification = this.getObject(
                    this.editForm.get('QualificationId').value,
                    this.dropdownItemsQualification
                );
                this.selectedJob = this.getObject(
                    this.editForm.get('JobId').value,
                    this.dropdownItemsJob
                );

                this.selectedDepartment = this.getObject(
                    this.editForm.get('DepartmentId').value,
                    this.dropdownItemsDepartment
                );
                this.selectedPartitions = this.getObject(
                    this.editForm.get('PartationId').value,
                    this.dropdownItemsPartition
                );
                this.selectedShift = this.getObject(
                    this.editForm.get('ShiftId').value,
                    this.dropdownItemsShift
                );
                this.selectedBank = this.getObject(
                    this.editForm.get('BankId').value,
                    this.dropdownItemsBank
                );
                this.selectedGrade = this.getObject(
                    this.editForm.get('GradeId').value,
                    this.dropdownItemsGrade
                );
                this.selectedjobNature = this.getObject(
                    this.editForm.get('JobNatureId').value,
                    this.dropdownItemsJobNature
                );
                this.selectedIsInsured = this.selectedIsInsured;
                this.selectedIsManager = this.selectedIsManager;

                this.selectedRecuritmentSource = this.getObject(
                    this.editForm.get('RecuritmentSourceId').value,
                    this.dropdownItemsRecuritmentSource
                );

                this.selectedContactType = this.getObject(
                    this.editForm.get('ContractTypeId').value,
                    this.dropdownItemsContractType
                );
                this.joinInDate = this.DatePipe.transform(
                    this.editForm.get('JoininDate').value,
                    'MM/dd/yyyy'
                );
                this.hiringData = this.DatePipe.transform(
                    this.editForm.get('HirDate').value,
                    'MM/dd/yyyy'
                );
                this.resignationDate = this.DatePipe.transform(
                    this.editForm.get('ResignationDate').value,
                    'MM/dd/yyyy'
                );
                this.address = this.address;
                this.nameAr = this.nameAr;
                this.englishName = this.englishName;
                this.discription = this.discription;
                this.nationalId = this.nationalId;
                this.phone = this.phone;
                this.machineCode = this.machineCode;
                this.email = this.email;
                // if (this.imageUrl) {
                //     this.imageUrl = `${this.baseImgUrl}/${this.imageUrl}`;
                //     this.uploadedFiles.push(this.imageUrl);
                // }

                //         console.log('updated data : ', res.data);
                //     },
                //     error: (err) => {
                //         console.log(err);
                //     },
                // });
            },
            error: (err) => {
                this.editForm.get('Id').disable();
                console.log(err);
            },
        });
        console.log(formData.value);
    }
    onGovernmentChange(event: any): void {
        console.log(event);
    }
    getData(): Observable<any> {
        return this.employeeEditService.GetById(this.currentId);
    }
    onSelect(event: any) {
        console.log(event);
        this.uploadedFiles = [];
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }
    }
}
