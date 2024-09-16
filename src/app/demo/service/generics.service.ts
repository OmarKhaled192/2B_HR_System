import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export abstract class GenericsService {
    constructor() {}
    sortField: string = 'id';
    sortOrder: string = 'asc';
    showFormNew: boolean = false;
    selectedItems: any = [];
    submitted: boolean = false;
    productDialog: boolean = false;
    product: any;
    event!: any;
    deleteProductDialog: boolean = false;
    deleteProductsDialog: boolean = false;
    allData: any = [];
    totalItems: any;
    loading: boolean = true;
    nameFilter: string = '';

    splitCamelCase(str: any) {
        return str
            .replace(/([A-Z])/g, ' $1')
            .trim()
            .replace(/\s+/g, ' ')
            .split(' ')
            .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    
    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }

    toggleNew() {
        this.showFormNew = !this.showFormNew;
    }

    sortById(event: any) {
        this.sortField = 'id';

        this.sortOrder = '';
        if (this.sortOrder === 'asc') {
            this.sortOrder = 'dsc';
        } else if (this.sortOrder === 'dsc') {
            this.sortOrder = 'asc';
        }

        return this.sortOrder;
    }

    sortByName(event: any) {
        this.sortField = 'name';
    }

    abstract setFieldsNulls(): void;

    // abstract exportCSV(): any;
    // abstract convertToCSV(data: any[], cols: any): string;
}
