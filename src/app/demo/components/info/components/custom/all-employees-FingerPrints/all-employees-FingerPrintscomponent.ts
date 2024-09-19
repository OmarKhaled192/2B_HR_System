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
import { ActivatedRoute } from '@angular/router';
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

    filterForm: FormGroup = new FormGroup({
        birthDate: new FormControl(null),
        bloodTypes: new FormControl(null),
    });

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
    deleteProductDialog: boolean = false;
    deleteProductsDialog: boolean = false;
    submitted: boolean = false;
    productDialog: boolean = false;
    product: any;
    event!: any;
    showFormNew: boolean = false;
    sortField: string = 'employeeName';
    sortOrder: string = 'asc';

    locationDropDown: any;
    // for new
    selectedLocation: string;
    selectedLocationId: number;

    // for edit
    selectedLocationEdit: string;
    selectedLocationEditId: number;

    // custom
    empId: number;

    // for all employees customize
    dropdownItemsEmployee: any;
    selectedEmployee: any;
    selectedEmployeeEdit: any;


    files!: TreeNode[];

    ngOnInit() {
        this.endPoint = 'FingerPrint';

        this._AllEmployeeFingerPrintsService.setEndPoint(this.endPoint);

        this.cols = [
            { field: 'employeeName', header: 'Employee Name' },
            { field: 'locationName', header: 'Location Names' },
            { field: 'dateAndTime', header: 'Date And Times' },
        ];

        // get dropdown for Employee
        this.getLocation();
        this.getDropDownEmployee();

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

    getDropDownEmployee() {
        this._AllEmployeeFingerPrintsService.getDropDown('Employee').subscribe({
            next: (res) => {
                console.log(res);
                this.dropdownItemsEmployee = res.data;
                console.log(this.dropdownItemsEmployee);
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    submitForm(formData: FormGroup) {

    }

    getLocation() {
        this._AllEmployeeFingerPrintsService.getDropDown('Location').subscribe({
            next: (res) => {
                console.log(res.data);
                this.locationDropDown = res.data;
            },
            error: (error) => {
                console.log(error);
            },
        });
    }

    editProduct(rowData: any) {
        console.log(rowData.id);
        console.log('edit works');
        this._AllEmployeeFingerPrintsService.GetById(rowData.id).subscribe({
            next: (res) => {
                console.log(res.data);

                console.log('location Drop Down');
                console.log(this.locationDropDown);

                this.selectedLocationEdit = this.locationDropDown.find(
                    (location: any) => location.id == rowData.locationId
                );

                this.selectedEmployeeEdit = this.dropdownItemsEmployee.find(
                    (item: any) => item.id == res.data.employeeId
                );

                console.log(this.selectedLocationEdit);
                this.product = { ...res.data };
                this.productDialog = true;
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    confirmDelete(id: number) {
        let body = [id];

        // perform delete from sending request to api
        this._AllEmployeeFingerPrintsService.DeleteRange(body).subscribe({
            next: () => {
                // close dialog
                this.deleteProductDialog = false;

                // show message for user to show processing of deletion.
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Product Deleted',
                    life: 3000,
                });

                // load data here
                this.loadData(
                    this.page,
                    this.itemsPerPage,
                    this.nameFilter,
                    this.sortField,
                    this.sortOrder
                );
            },
            error: (err) => {
                console.log(err);

                this.messageService.add({
                    severity: 'error',
                    summary: 'error field',
                    detail: 'Product Deleted',
                    life: 3000,
                });
            },
        });
    }

    addNew() {
        let body = {
            employeeId: this.selectedEmployee.id,
            locationId: this.selectedLocationId,
        };

        this._AllEmployeeFingerPrintsService.Register(body).subscribe({
            next: (res) => {
                console.log(res);
                this.showFormNew = false;
                // show message for success inserted
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'inserted success',
                    life: 3000,
                });

                // set fields is empty
                this.setFieldsNulls();

                // load data again
                this.loadData(
                    this.page,
                    this.itemsPerPage,
                    this.nameFilter,
                    this.sortField,
                    this.sortOrder
                );
            },
            error: (err) => {
                // this.showFormNew = false;

                this.messageService.add({
                    severity: 'error',
                    summary: 'error field',
                    detail: 'All Fields is required',
                    life: 3000,
                });

                console.log(err);
            },
        });
    }

    loadFilteredData(nameFilter?: any, filterType?: any) {
        this.loadData(
            this.page,
            this.itemsPerPage,
            nameFilter,
            filterType,
            this.sortOrder
        );
    }

    setFieldsNulls() {
        this.selectedLocation = null;
        this.selectedEmployee = null;
        this.selectedEmployeeEdit = null;
    }

    onChangeLocation() {
        this.selectedLocationId = this.selectedLocation?.['id'];
    }

    jsonToFormData(json: any) {
        const formData = new FormData();

        Object.keys(json).forEach(key => {
            formData.append(key, json[key]);
        });

        return formData;
    }

    onChangeLocationEdit() {
        this.selectedLocationEditId = this.selectedLocationEdit?.['id'];
    }

    loadData(
        page: number,
        size: number,
        nameFilter: string,
        filterType: string,
        sortType: string
    ) {
        this.loading = true;
        let filteredData = {
            PageNumber: page,
            PageSize: size,
            FilterValue: nameFilter,
            FilterType: filterType,
            SortType: sortType,
        };
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
            this.sortOrder
        );

        // this.selectedItems = this.allData;
    }

    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    deleteProduct(product: any) {
        this.deleteProductDialog = true;
        this.product = { ...product };
    }

    saveProduct(id: number, empLocation: any) {
        this.submitted = true;

        console.log(id);
        console.log(empLocation);

        let body = {
            id: empLocation.id,
            locationId: this.selectedLocationEditId,
            employeeId: this.selectedEmployeeEdit?.['id'],
        };

        console.clear();
        console.log('body here for editing..........');

        console.log(body);

        this._AllEmployeeFingerPrintsService.Edit(body).subscribe({
            next: () => {
                this.hideDialog();
                // show message for user to show processing of deletion.
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'You Edit This Item',
                    life: 3000,
                });

                // load data again
                this.loadData(
                    this.page,
                    this.itemsPerPage,
                    this.nameFilter,
                    this.sortField,
                    this.sortOrder
                );
            },
            error: (err) => {
                console.log(err);
                alert(err);
            },
        });
    }

    toggleNew() {
        if (this.showFormNew) {
            this.showFormNew = false;
        } else {
            this.showFormNew = true;
            this.setFieldsNulls();
        }
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

    splitCamelCase(str: any) {
        return str
            .replace(/([A-Z])/g, ' $1')
            .trim()
            .replace(/\s+/g, ' ')
            .split(' ')
            .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    confirmDeleteSelected() {
        let selectedIds = [];
        console.log('Selected Items :');

        this.selectedItems.forEach((item: any) => {
            selectedIds.push(item.id);
        });

        this._AllEmployeeFingerPrintsService.DeleteRange(selectedIds).subscribe({
            next: (res) => {
                this.deleteProductsDialog = false;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'items deleted successfully',
                    life: 3000,
                });
                this.selectedItems = [];

                this.loadData(
                    this.page,
                    this.itemsPerPage,
                    this.nameFilter,
                    this.sortField,
                    this.sortOrder
                );
            },
            error: (err) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Failure',
                    detail: err.statusText,
                    life: 3000,
                });
                this.deleteProductsDialog = false;
                this.loadData(
                    this.page,
                    this.itemsPerPage,
                    this.nameFilter,
                    this.sortField,
                    this.sortOrder
                );
            },
        });
    }

}
