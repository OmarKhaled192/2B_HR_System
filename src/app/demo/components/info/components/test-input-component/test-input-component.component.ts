import { Component } from '@angular/core';
import { StdPaginationsInputs } from '../../../std-paginations-Inputs/std-paginations-Inputs';

@Component({
    selector: 'app-test-input-component',
    standalone: true,
    imports: [StdPaginationsInputs],
    templateUrl: './test-input-component.component.html',
    styleUrl: './test-input-component.component.scss',
})
export class TestInputComponentComponent {
    cols: any = [];
    ngOnInit(): void {
        this.cols = [
            // basic data
            { field: 'name', header: 'Name' },
            { field: 'notes', header: 'Notes' },

            // Generic Fields
            { field: 'creationTime', header: 'CreationTime' },
            { field: 'lastModificationTime', header: 'LastModificationTime' },
            { field: 'creatorName', header: 'CreatorName' },
            { field: 'lastModifierName', header: 'LastModifierName' },
        ];
    }


}
