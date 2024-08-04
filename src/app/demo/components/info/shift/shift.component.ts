import { CommonModule, Time } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MessageService } from 'primeng/api';
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
import { LockupsService } from 'src/app/demo/service/lockups.service';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrl: './shift.component.scss',
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
    CalendarModule
  ],
  providers: [MessageService],
})
export class ShiftComponent {

    constructor(
        private _LockupsService: LockupsService,
        private messageService: MessageService
    ) {}

    @ViewChild('dt') dt: Table;
    @Input() endPoint!: string;
    allData: any = [];
    page: number = 1;
    itemsPerPage = 3;
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
    newNotes!: string;
    showFormNew: boolean = false;
    sortField: string = 'id';
    sortOrder: string = 'asc';

    newNameAr!: string;
    newNameEn!: string;
    numberOfHours!: number;
    startAttendeesTime: Date;
    endAttendeesTime: Date;


    ngOnInit() {
        this.endPoint = "Shift";

        this._LockupsService.setEndPoint(this.endPoint);

        this.cols = [
            // main field
            { field: 'name', header: 'Name' },

            // personal fields
            { field: 'startAttendeesTime', header: 'StartAttendeesTime' },
            { field: 'endAttendeesTime', header: 'EndAttendeesTime' },
            { field: 'numberOfHours', header: 'NumberOfHours' },


            // main field
            { field: 'notes', header: 'Notes' },

            // Generic Fields
            { field: 'creationTime', header: 'CreationTime' },
            { field: 'lastModificationTime', header: 'LastModificationTime' },
            { field: 'creatorName', header: 'CreatorName' },
            { field: 'lastModifierName', header: 'LastModifierName' },
        ];
    }

    editProduct(rowData: any) {
        console.log(rowData.id)
        this._LockupsService.GetById(rowData.id).subscribe({
            next: (res) => {
                console.log(res.data);
                this.product = { ...res.data };
                this.productDialog = true;
            },
            error: (err) => {
                console.log(err);
            }
        })
    }

    startAttendeesTimeClick(event: any) {

    }

    endAttendeesTimeClick(event: any) {

    }

    confirmDelete(id: number) {
        // perform delete from sending request to api
        this._LockupsService.DeleteSoftById(id).subscribe({
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
            },
        });
    }

    addNew() {
        
        // first convert from date full format to time only
        // why? because prime ng calender component returned the value as a full Date Format
        let startAttendeesTime = this.startAttendeesTime.toLocaleTimeString('en-US', { hour12: false });
        let endAttendeesTime = this.endAttendeesTime.toLocaleTimeString('en-US', { hour12: false });

        // set body of request
        let body = {
            name: this.newNameAr,
            notes: this.newNotes,
            engName: this.newNameEn,
            startAttendeesTime: startAttendeesTime,
            endAttendeesTime: endAttendeesTime,
            numberOfHours: this.numberOfHours
        };

        console.log(body);

        // Confirm add new
        this._LockupsService.Register(body).subscribe({
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
                this.showFormNew = false;
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: err,
                    life: 3000,
                });
            },
        });
    }

    loadFilteredData() {
        this.loadData(
            this.page,
            this.itemsPerPage,
            this.nameFilter,
            this.sortField,
            this.sortOrder
        );
    }

    setFieldsNulls() {
        (this.newNameAr = null), (this.newNameEn = null), (this.newNotes = null);
        (this.numberOfHours = null), (this.startAttendeesTime = null), (this.endAttendeesTime = null)
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
            pageNumber: page,
            pageSize: size,
            filterValue: nameFilter,
            filterType: filterType,
            sortType: sortType,
        };
        filteredData.sortType = this.sortOrder;

        this._LockupsService.GetPage(filteredData).subscribe({
            next: (res) => {
                console.log(res);
                this.allData = res.data;
                console.log(res.data);

                this.totalItems = res.totalItems;
                this.loading = false;
                console.log(this.selectedItems);
            },
            error: (err) => {
                console.log(err);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: err,
                    life: 3000,
                });
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

    saveProduct(id: number, product: any) {
        this.submitted = true;
        console.log(id);
        console.log(product);

        let body = {
            engName: product.engName,
            name: product.name,
            id: product.id,
            notes: product.notes,
            startAttendeesTime: product.startAttendeesTime,
            endAttendeesTime: product.endAttendeesTime,
            numberOfHours: product.numberOfHours
        };

        this._LockupsService.Edit(body).subscribe({
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
        link.download = 'data_export_' + new Date().getTime() + '.csv';
        link.click();
    }

    convertToCSV(data: any[]): string {
        if (!data || !data.length) return '';

        const separator = ',';
        let keys = [];

        this.cols.forEach((row) => {
            keys.push(row.field);
        });
        console.log(keys);

        const csvContent = data.map((row) =>
            keys.map((key) => `"${row[key]}"`).join(separator)
        );

        csvContent.unshift(keys.join(separator)); // Add header row
        return csvContent.join('\r\n'); // Join all rows
    }

    confirmDeleteSelected() {
        let selectedIds = [];
        console.log('Selected Items :');

        this.selectedItems.forEach((item: any) => {
            selectedIds.push(item.id);
        });

        this._LockupsService.DeleteRangeSoft(selectedIds).subscribe({
            next: (res) => {
                this.deleteProductsDialog = false;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'items deleted successfully',
                    life: 3000,
                });
                this.loadData(
                    this.page,
                    this.itemsPerPage,
                    this.nameFilter,
                    this.sortField,
                    this.sortOrder
                );
            },
            error: (err) => {
                this.deleteProductsDialog = false;
                this.messageService.add({
                    severity: 'error',
                    summary: 'Failure',
                    detail: err.statusText,
                    life: 3000,
                });
            },
        });
    }
    sortById(event: any) {
        this.sortField = 'id';

        if (this.sortOrder === 'asc') {
            this.sortOrder = 'dsc';
        } else if (this.sortOrder === 'dsc') {
            this.sortOrder = 'asc';
        }
    }
    sortByName(event: any) {
        this.sortField = 'name';
    }
}
