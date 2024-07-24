import { Component } from '@angular/core';
import { PaginationService } from './pagination.service';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
    constructor(private _PaginationService: PaginationService) {}

    allData: any = [];
    page: number = 1;
    itemsPerPage = 4;
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
    newName!: string;
    newNotes!: string;

    ngOnInit() {
        this.loadData(this.page, this.itemsPerPage, this.nameFilter);

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'notes', header: 'Notes' },
        ];
    }

    editProduct(rowData: any) {
        this.product = { ...rowData };
        this.productDialog = true;
    }

    addNew() {
        let body = {
            name: this.newName,
            notes: this.newNotes,
        };

        this._PaginationService.Register(body).subscribe({
            next: (res) => {
                console.log(res);
                alert('inserted success');
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    loadData(page: number, size: number, nameFilter: string = '') {
        this.loading = true;
        let filteredData = {
            pageNumber: page,
            pageSize: size,
        };

        this._PaginationService.GetPage(filteredData).subscribe({
            next: (res) => {
                console.log(res);
                this.allData = res.data;
                console.log(res.data);
                // this.allData = [
                //     {
                //         name: 'Omar',
                //     },
                //     {
                //         name: 'khaled',
                //     },
                //     {
                //         name: 'Saad',
                //     },
                //     {
                //         name: 'Hassan',
                //     },
                // ];

                this.totalItems = res.totalItems;
                this.loading = false;
                this.selectedItems = this.allData;
                console.log(this.selectedItems);
            },
            error: (err) => {
                console.log(err);
                this.loading = false;
            },
        });
    }

    onPageChange(event: any) {
        console.log(event);
        this.page = Number(event.first / event.rows) + 1;
        this.itemsPerPage = event.rows;
        this.loadData(this.page, this.itemsPerPage);
        this.selectedItems = this.allData;
    }

    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }

    openNew() {
        this.allData = {};
        this.submitted = false;
        this.productDialog = true;
    }
}
