import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule, UploadEvent } from 'primeng/fileupload';
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
import { CompanyPolicyService } from './company-policy.service';

@Component({
    selector: 'app-company-policy',
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
        TranslateModule,
    ],
    providers: [MessageService, DatePipe],
    templateUrl: './company-policy.component.html',
    styleUrl: './company-policy.component.scss',
})
export class CompanyPolicyComponent {
    constructor(
        private companyPolicyService: CompanyPolicyService,
        private messageService: MessageService,
        private DatePipe: DatePipe,
        private http: HttpClient
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
    showFormNew: boolean = false;
    sortField: string = 'id';
    sortOrder: string = 'asc';

    // custom variables
    enName: string;
    arName: string;
    notes: string;
    url: string;
    discreption: string;
    selectedShift: string;
    selectedShiftId: number;
    file: File;
    fileBase64: string = '';

    selectedShiftEdit: string;
    selectedShiftIdEdit: number;
    oldDate: any;

    ngOnInit() {
        this.endPoint = 'CompanyPolicy';

        this.companyPolicyService.setEndPoint(this.endPoint);

        this.cols = [
            // custom fields
            { field: 'url', header: 'Url' },
            { field: 'discreption', header: 'Discreption' },
            { field: 'file', header: 'File' },
            { field: 'deletFIle', header: 'deletFIle' },

            // Generic Fields
            { field: 'creationTime', header: 'creationTime' },
            { field: 'lastModificationTime', header: 'lastModificationTime' },
            { field: 'creatorName', header: 'creatorName' },
            { field: 'lastModifierName', header: 'lastModifierName' },
        ];
    }

    editProduct(rowData: any) {
        console.log(rowData.id);
        this.companyPolicyService.GetById(rowData.id).subscribe({
            next: (res) => {
                console.log(res.data);
                this.product = { ...res.data };
                this.productDialog = true;

                // get product.shiftId
                // this.selectedShiftEdit = this.shiftDropDown.find(
                //     (shift: any) => this.product.shiftId == shift.id
                // );

                // get product.date
                this.oldDate = this.DatePipe.transform(
                    this.product.date,
                    'MM/dd/yyyy'
                );
                this.product.date = this.DatePipe.transform(
                    this.product.date,
                    'MM/dd/yyyy'
                );

                // console.log("product date")
                // console.log(this.product.date)

                // console.log("old date")
                // console.log(this.oldDate)
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    changedSelected() {
        this.selectedShiftId = this.selectedShift['id'];
    }

    changedSelectedEdit() {
        this.selectedShiftId = this.selectedShift['id'];
    }

    splitCamelCase(str:any) {
        return str.replace(/([A-Z])/g, ' $1')
        .trim()
        .replace(/\s+/g, ' ')
        .split(' ')
        .map((word:any) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

    confirmDelete(id: number) {
        // perform delete from sending request to api
        this.companyPolicyService.DeleteSoftById(id).subscribe({
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
            engName: this.enName,
            name: this.arName,
            notes: this.notes,
            discreption: this.discreption,
            file: this.file,
        };

        this.companyPolicyService.Register(body).subscribe({
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
        // this.date = null;
        // this.reason = null;
        // this.selectedShift = null;
        // this.selectedShiftId = null;
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

        this.companyPolicyService.GetPage(filteredData).subscribe({
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

        this.oldDate = this.DatePipe.transform(
            this.product.date,
            'yyyy-MM-ddTHH:mm:ss'
        );
        this.product.date = this.DatePipe.transform(
            this.product.date,
            'yyyy-MM-ddTHH:mm:ss'
        );

        console.log('oldDate');
        console.log(this.oldDate);

        console.log('product data');
        console.log(product.data);

        let body = {
            id: product.id,
            date: product.date,
            reason: product.reason,
            shiftId: product.shiftId,
        };

        console.clear();
        console.log('body here ');

        console.log(body);

        this.companyPolicyService.Edit(body).subscribe({
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

        this.cols.forEach((row) => {
            keys.push(row.field);
        });
        console.log(keys);

        const csvContent = data.map((row) =>
            keys
                .map((key) => {
                    if (key == 'shift') {
                        console.log(row['shiftName']);
                    }

                    return key == 'Shift' ? `"${row[key]}"` : `"${row[key]}"`;
                })
                .join(separator)
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

        this.companyPolicyService.DeleteRangeSoft(selectedIds).subscribe({
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
    onFileSelect(event: any) {
        this.file = event.files[0];
        const file = event.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.fileBase64 = reader.result as string;
        };
    }

    uploadFile() {
        const formData: FormData = new FormData();
        formData.append('engName', this.enName);
        formData.append('name', this.arName);
        formData.append('notes', this.notes);
        formData.append('discreption', this.discreption);
        formData.append('file', this.file);

        this.companyPolicyService.Register(formData).subscribe({
            next: (response) => {
                console.log(response);
            },
            error: (error) => {
                console.log(error);
            },
        });
    }
}
