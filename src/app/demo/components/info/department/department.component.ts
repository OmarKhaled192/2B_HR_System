import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StdPaginationComponent } from '../../std-pagination/std-pagination.component';
import { StdPaginationsWithPopupComponent } from '../../std-paginations-with-popup/std-paginations-with-popup.component';

@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    styleUrl: './department.component.scss',
    providers: [MessageService],
    standalone: true,
    imports: [StdPaginationsWithPopupComponent]
})
export class DepartmentComponent {

}
