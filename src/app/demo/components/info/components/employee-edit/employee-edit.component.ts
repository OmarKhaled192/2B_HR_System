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
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeEditService } from './employee-edit.service';

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

    uploadedFiles: any[] = [];
    files: File[];
    currentId!: number;
    birthDate!: any;
    joinInDate!: any;
    hiringData!: any;
    resignationDate!: any;

    filterForm: FormGroup = new FormGroup({
        birthDate: new FormControl(),
        bloodTypes: new FormControl(),
        departmentId: new FormControl(),
        gender: new FormControl(),
        governmentId: new FormControl(),
        hirDate: new FormControl(),
        jobId: new FormControl(),
        joininDate: new FormControl(),
        maritalStatus: new FormControl(),
        partationId: new FormControl(),
        qualificationId: new FormControl(),
        shiftId: new FormControl(),
        resignationDate: new FormControl(),
        ismanger: new FormControl(),
        isInsured: new FormControl(),
        religion: new FormControl(),
        bankId: new FormControl(),
        gradeId: new FormControl(),
        jobNatureId: new FormControl(),
        recuritmentSourceId: new FormControl(),
        contractTypeId: new FormControl(),
    });
    ngOnInit() {
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
        this.getDropDownField({
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

        this.activatedRoute.queryParams.subscribe((params) => {
            this.currentId = params['id'];
        });
        console.log('Current Id : ', this.currentId);
        this.employeeEditService.GetById(this.currentId).subscribe({
            next: (res) => {
                this.allData = res.data;
                console.log(this.allData);
                this.birthDate = this.DatePipe.transform(
                    res.data.birthDate,
                    'MM/dd/yyyy'
                );
                this.selectedReligin = this.getObject(
                    res.data.governmentId,
                    this.dropdownItemsReligin
                );
                this.selectedGovernment = this.getObject(
                    res.data.governmentId,
                    this.dropdownItemsGovernment
                );
                this.selectedMaritalStatus = this.getObject(
                    res.data.maritalStatus,
                    this.dropdownItemsMaritalStatus
                );
                this.selectedBloodType = this.getObject(
                    res.data.bloodTypes,
                    this.dropdownItemsBloodTypes
                );
                this.selectedGender = this.getObject(
                    res.data.gender,
                    this.dropdownItemsGender
                );
                this.selectedQualification = this.getObject(
                    res.data.qualificationId,
                    this.dropdownItemsQualification
                );
                this.selectedJob = this.getObject(
                    res.data.jobId,
                    this.dropdownItemsJob
                );

                this.selectedDepartment = this.getObject(
                    res.data.departmentId,
                    this.dropdownItemsDepartment
                );
                this.selectedPartitions = this.getObject(
                    res.data.partationId,
                    this.dropdownItemsPartition
                );
                this.selectedShift = this.getObject(
                    res.data.shiftId,
                    this.dropdownItemsShift
                );
                this.selectedBank = this.getObject(
                    res.data.bankId,
                    this.dropdownItemsBank
                );
                this.selectedGrade = this.getObject(
                    res.data.gradeId,
                    this.dropdownItemsGrade
                );
                this.selectedjobNature = this.getObject(
                    res.data.jobNatureId,
                    this.dropdownItemsJobNature
                );
                this.selectedIsInsured = res.data.isInsured;
                this.selectedIsManager = res.data.ismanger;

                this.selectedRecuritmentSource = this.getObject(
                    res.data.recuritmentSourceId,
                    this.dropdownItemsRecuritmentSource
                );

                this.selectedContactType = this.getObject(
                    res.data.recuritmentSourceId,
                    this.dropdownItemsContractType
                );
                this.joinInDate = this.DatePipe.transform(
                    res.data.joininDate,
                    'MM/dd/yyyy'
                );
                this.hiringData = this.DatePipe.transform(
                    res.data.hirDate,
                    'MM/dd/yyyy'
                );
                this.resignationDate = this.DatePipe.transform(
                    res.data.resignationDate,
                    'MM/dd/yyyy'
                );

                console.log('selectedGovernment: ', this.selectedGovernment);
            },
            error: (err) => {
                console.log(err);
            },
        });

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

    onSelect(evt: any) {
        console.log(evt);
        this.messageService.add({
            severity: 'info',
            summary: 'File Uploaded',
            detail: '',
        });
    }

    getObject(id: number, dropdown: any[]) {
        return dropdown.find((item: any) => item.id == id);
    }

    submitForm(formData: FormGroup) {
        formData.patchValue({
            bloodTypes: this.selectedBloodType?.id,
            governmentId: this.selectedGovernment?.id,
            qualificationId: this.selectedQualification?.id,
            gender: this.selectedGender?.id,
            maritalStatus: this.selectedMaritalStatus?.id,
            jobId: this.selectedJob?.id,
            jobNatureId: this.selectedjobNature?.id,
            departmentId: this.selectedDepartment?.id,
            partationId: this.selectedPartitions?.id,
            shiftId: this.selectedShift?.id,
            bankId: this.selectedBank?.id,
            gradeId: this.selectedGrade?.id,
            contractTypeId: this.selectedContactType?.id,
            recuritmentSourceId: this.selectedRecuritmentSource?.id,
            religion: this.selectedReligin?.id,

            joininDate: this.DatePipe.transform(
                this.filterForm.get('joininDate').value,
                'yyyy-MM-ddTHH:mm:ss'
            ),

            birthDate: this.DatePipe.transform(
                this.filterForm.get('birthDate').value,
                'yyyy-MM-ddTHH:mm:ss'
            ),

            hirDate: this.DatePipe.transform(
                this.filterForm.get('hirDate').value,
                'yyyy-MM-ddTHH:mm:ss'
            ),

            resignationDate: this.DatePipe.transform(
                this.filterForm.get('resignationDate').value,
                'yyyy-MM-ddTHH:mm:ss'
            ),
        });

        console.log(formData.value);

        const formDataValue = formData.value;

        // Filter out null or undefined fields
        const filteredData = Object.keys(formDataValue)
            .filter(
                (key) =>
                    formDataValue[key] !== null &&
                    formDataValue[key] !== undefined
            )
            .reduce((obj, key) => {
                obj[key] = formDataValue[key];
                return obj;
            }, {});
        console.log('filteredData :');

        console.log(filteredData);

        this.employeeEditService.GetPage(filteredData).subscribe({
            next: (res) => {
                this.manageItems.nativeElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                window.scrollY = 1000;
                this.allData = res.data;

                console.log('result');

                console.log(res);
            },
            error: (err) => {
                console.log(err);
            },
        });
    }
    onGovernmentChange(event: any): void {
        console.log(event);
    }
}
