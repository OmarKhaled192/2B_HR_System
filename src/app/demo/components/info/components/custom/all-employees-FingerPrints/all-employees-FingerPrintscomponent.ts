import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
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
import { DayNamePipe } from '../shift-vacation/day-name.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { MessageService, TreeNode } from 'primeng/api';
import { itemsPerPageGlobal } from 'src/main';
import { AllEmployeeFingerPrintsService } from './all-employees-FingerPrints.service';
import { PanelModule } from 'primeng/panel';
import { TreeTableModule } from 'primeng/treetable';

@Component({
    selector: 'app-all-employees-fingerPrints',
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
        CalendarModule,
        DayNamePipe,
        TranslateModule,
        PanelModule,
        TreeTableModule,
    ],
    providers: [MessageService, DatePipe, DayNamePipe],
    templateUrl: './all-employees-FingerPrints.component.html',
    styleUrl: './all-employees-FingerPrints.component.scss',
})
export class AllEmployeesFingerPrintComponent {
    constructor(
        private _AllEmployeeFingerPrintsService: AllEmployeeFingerPrintsService,
        private messageService: MessageService,
        private datePipe: DatePipe
    ) {}


    @ViewChild('dt') dt: Table;
    id!: number;

    endPoint!: string;
    allData: any = [];
    page: number = 1;
    itemsPerPage = itemsPerPageGlobal;
    selectedItems: any = [];
    cols: any[] = [];
    totalItems: any;
    loading: boolean = true;
    nameFilter: string = '';

    submitted: boolean = false;
    productDialog: boolean = false;
    product: any;
    event!: any;
    sortField: string = 'id';
    sortOrder: string = 'asc';

    locationDropDown: any;
    isCollapsed: boolean;

    // for all employees customize
    dropdownItemsEmployee: any;
    dropdownItemsDepartment: any;
    dropdownItemsPartition: any;
    dropdownItemsShift: any;
    dropdownItemsJob: any;
    dropdownItemsLocations: any;
    dropdownItemsEmployeeManager: any;

    // selected Variables
    selectedEmployee: any | null = null;
    selectedEmployeeManager: any | null = null;
    selectedDepartment: any | null = null;
    selectedPartition: any | null = null;
    selectedShift:any | null = null;
    selectedJob: any | null = null;
    selectedLocation: any | null = null;


    files!: TreeNode[];

    ngOnInit() {
        this.endPoint = 'FingerPrint';
        this.isCollapsed = true;

        this._AllEmployeeFingerPrintsService.setEndPoint(this.endPoint);

        this.cols = [
            { field: 'employeeName', header: 'Employee Name' },
            { field: 'locationName', header: 'Location Names' },
            { field: 'dateAndTime', header: 'Date And Times' },
        ];

        // get DropDowns
        this.getAllDropDowns();

        // load filtered data at init.
        this.loadFilteredData();

    }

    getDistinctNumberLocations(timelocations: any[]) {
        let allLocations = [];

        timelocations.map(eachOne => allLocations.push( eachOne.locationName ))

        let uniqueValues = [...new Set(allLocations)];

        return uniqueValues.length;
    }

    getTreeTable(empData: any) {
        this.files = [];
        empData.forEach((raw: any) => {
            // Create a parent node for each employee
            let locationCount = this.getDistinctNumberLocations(raw.timelocation);
            let node = {
                data: {
                    employeeName: raw.employeeName,
                    dateAndTime: this.datePipe.transform( raw.date, 'dd/MM/yyyy'),
                    locationName: `${locationCount} ${ locationCount>1? 'Locations': 'Location'}`,
                },
                children: []
            };

            raw.timelocation.map((timeLocation: any) => {
                const timeString = timeLocation.fingerprintTimes;
                const date = new Date(`1970-01-01T${timeString}`);
                const formattedTime = this.datePipe.transform(date, 'hh:mm a');

                node.children.push({
                    data: {
                        employeeName: 1,
                        dateAndTime: formattedTime,
                        locationName: timeLocation.locationName,
                    }
                });
            });

            this.files.push(node);
        });

        console.log("files")
        console.log(this.files);
        return this.files
    }

    getAllDropDowns() {
        // get EmployeeManager Dropdown
        this.getDropDownFieldManager({
            field: 'dropdownItemsEmployeeManager',
        });

        // get Locations Dropdown
        this.getDropDownField({
            field: 'dropdownItemsLocations',
            enum: 'Location',
        });

        // get Department Dropdown
        this.getDropDownField({
            field: 'dropdownItemsDepartment',
            enum: 'Department',
        });

         // get Shift Dropdown
         this.getDropDownField({
            field: 'dropdownItemsShift',
            enum: 'Shift',
        });

         // get Job Dropdown
         this.getDropDownField({
            field: 'dropdownItemsJob',
            enum: 'Job',
        });

    }

    getDropDownField(self: { field: any; enum: string }) {
        this._AllEmployeeFingerPrintsService.getDropDown(self.enum).subscribe({
            next: (res) => {
                this[self.field] = res.data;
            },
            error: (err) => {
                console.log(`error in ${self.field}`);
                console.log(err);
            },
        });
    }

    getDropDownFieldManager(self: { field: any;}) {
        this._AllEmployeeFingerPrintsService.getDropDownManager().subscribe({
            next: (res) => {
                this[self.field] = res.data;
            },
            error: (err) => {
                console.log(`error in ${self.field}`);
                console.log(err);
            },
        });
    }

    onFilter() {
        this.isCollapsed = true;

        this.loadData(
            this.page,
            this.itemsPerPage,
            this.nameFilter,
            this.sortField,
            this.sortOrder,
            this.selectedEmployee,
            this.selectedDepartment,
            this.selectedEmployeeManager,
            this.selectedLocation,
            this.selectedShift,
            this.selectedPartition,
            this.selectedJob,
        );

    }

    onChangeDepartment() {

    }

    loadFilteredData() {

        this.loadData(
            this.page,
            this.itemsPerPage,
            this.nameFilter,
            this.sortField,
            this.sortOrder,
            this.selectedEmployee,
            this.selectedDepartment,
            this.selectedEmployeeManager,
            this.selectedLocation,
            this.selectedShift,
            this.selectedPartition,
            this.selectedJob,
        );
    }

    setFieldsNulls() {
        this.selectedEmployee = null
        this.selectedDepartment = null
        this.selectedEmployeeManager = null
        this.selectedLocation = null
        this.selectedShift = null
        this.selectedPartition = null
        this.selectedJob = null
    }

    jsonToFormData(json: any) {
        const formData = new FormData();

        Object.keys(json).forEach(key => {
            formData.append(key, json[key]);
        });

        return formData;
    }

    loadData(
        page: number,
        size: number,
        nameFilter: string,
        filterType: string,
        sortType: string,
        selectedEmployee?: string,
        selectedDepartment?: string,
        selectedManager?: string,
        selectedLocation?: string,
        selectedShift?: string,
        selectedPartation?: string,
        selectedJob?: string,
    ) {
        // loading
        this.loading = true;

        console.log('selected Employee')
        console.log(selectedEmployee)

        let filteredData = {
            PageNumber: page,
            PageSize: size,
            FilterValue: nameFilter,
            FilterType: filterType,
            SortType: sortType,
            EmployeeId: selectedEmployee?.['id'],
            DepartmentId: selectedDepartment?.['id'],
            MangerId: selectedManager?.['id'],
            LocationId: selectedLocation?.['id'],
            ShiftId: selectedShift?.['id'],
            PartationId: selectedPartation?.['id'],
            JobId: selectedJob?.['id']
        };

        // override for sortType with SortOrder
        filteredData.SortType = this.sortOrder;

        console.log('FilteredData From here');
        console.log(filteredData);

        let filteredDataForm:FormData = this.jsonToFormData(filteredData);

        this._AllEmployeeFingerPrintsService.GetPage(filteredDataForm).subscribe({
            next: (res) => {
                this.allData = res.data;
                this.getTreeTable(this.allData)
                this.totalItems = res.totalItems;

                this.loading = false;
                console.log(this.selectedItems);
            },
            error: (err) => {
                console.log(err);
                this.loading = false;
            },
        });
    }

    whenChangeDepartment() {
        this._AllEmployeeFingerPrintsService.getPartationByDepartmentId(this.selectedDepartment.id).subscribe({
            next: (res)=> {
                this.dropdownItemsPartition = res.data;
            },
            error: (err) => {
                console.log(err)
            }
        })
    }

    whenChangeManager() {
        this._AllEmployeeFingerPrintsService.GetEmployeeOfMangerDropDown(this.selectedEmployeeManager.id).subscribe({
            next: (res)=> {
                this.dropdownItemsEmployee = res.data;
            },
            error: (err) => {
                console.log(err)
            }
        })
    }

    onPageChange(event: any) {
        let x: string;
        console.log(event);
        this.page = Number(event.first / event.rows) + 1;
        x = event.sortOrder === 1 ? 'asc' : 'dsc';
        this.sortOrder = x;
        this.itemsPerPage = event.rows;
        // console.log(this.sortOrder);

        this.loadData(
            this.page,
            this.itemsPerPage,
            this.nameFilter,
            this.sortField,
            this.sortOrder,
            this.selectedEmployee,
            this.selectedDepartment,
            this.selectedEmployeeManager,
            this.selectedLocation,
            this.selectedShift,
            this.selectedPartition,
            this.selectedJob,
        );

        // this.selectedItems = this.allData;
    }

    exportCSV() {
        // Convert data to CSV format
        const csvData = this.convertToCSV(this.selectedItems);

        // Adding UTF-8 BOM
        const bom = '\uFEFF';
        const csvContent = bom + csvData;

        // Create a Blob with UTF-8 encoding
        const blob = new Blob([csvContent], {
            type: 'text/csv;charset=utf-8;',
        });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${this.endPoint}_` + new Date().getTime() + '.csv';
        link.click();
    }

    convertToCSV(data: any[]): string {
        if (!data || !data.length) return '';

        const separator = ',';
        let keys = [];

        // this.cols.forEach((row) => {
        //     keys.push(row.field);
        // });
        console.log(keys);

        const csvContent = data.map((row) =>
            keys.map((key) => `"${row[key]}"`).join(separator)
        );

        csvContent.unshift(keys.join(separator)); // Add header row
        return csvContent.join('\r\n'); // Join all rows
    }

    selectSpecEmployee(event:any)
    {
        this.selectedEmployee = event.value;
    }
}
