import { Component, ViewChild } from '@angular/core';
import { PaginationService } from '../pagination.service';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent {
    constructor(
        private _PaginationService: PaginationService,
        private messageService: MessageService
    ) {}

    @ViewChild('dt') dt: Table;

    endPoint: string = "Department";
    allData: any = [];
    page: number = 1;
    itemsPerPage = 2;
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
    newName!: string;
    newNotes!: string;
    showFormNew: boolean = false;
    sortField: string = 'id';
    sortOrder: string;

    ngOnInit() {
        // this.loadData(this.page, this.itemsPerPage, this.nameFilter);

        this._PaginationService.setEndPoint(this.endPoint);
        console.log(this.endPoint)

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'notes', header: 'Notes' },
        ];
    }

    editProduct(rowData: any) {
        this.product = { ...rowData };
        this.productDialog = true;
    }

    confirmDelete(id: number) {
        // perform delete from sending request to api
        this._PaginationService.DeleteSoftById(id).subscribe({
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
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    addNew() {
        let body = {
            name: this.newName,
            notes: this.newNotes,
        };

        this._PaginationService.Register(body).subscribe({
            next: (res) => {
                console.log(res);
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
        (this.newName = null), (this.newNotes = null);
    }

    loadData(
        page: number,
        size: number,
        nameFilter: string,
        filterType: string,
        sortType: string ="asc"
    ) {
        console.log(1);
        console.log(sortType);

        this.loading = true;
        let filteredData = {
            pageNumber: page,
            pageSize: size,
            filterValue: nameFilter,
            filterType: filterType,
            sortType: sortType,
        };



        this._PaginationService.GetPage(filteredData).subscribe({
            next: (res) => {
                console.log(res);
                this.allData = res.data;
                console.log(res.data);

                this.totalItems = res.totalItems;
                this.loading = false;
                // this.selectedItems = this.allData;
                console.log(this.selectedItems);


                console.log(sortType)
            },
            error: (err) => {
                console.log(err);
                this.loading = false;
            },
        });
    }

    onPageChange(event: any) {
        console.log(event);
        this.event = event;
        this.page = Number(event.first / event.rows) + 1;
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
            id: product.id,
            name: product.name,
            notes: product.notes,
        };

        this._PaginationService.Edit(body).subscribe({
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

        this._PaginationService.DeleteRangeSoft(selectedIds).subscribe({
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
        // console.log(2);
        // console.log(this.sortOrder);

        // if (
        //     event.target.ariaSort == 'ascending'
        // ) {
        //     this.sortOrder = 'asc';
        // } else this.sortOrder = 'dsc';
        // console.log(this.sortOrder);

        console.log(event);

    }

    onSort() {

        if (this.sortOrder == 'asc')
            this.sortOrder = 'dsc'
        else this.sortOrder = 'asc';

        this.loadData(
            this.page,
            this.itemsPerPage,
            this.nameFilter,
            this.sortField,
            this.sortOrder
        );
        console.log('ggggggggggggggggggg');
    }
}
