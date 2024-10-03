import { Component } from '@angular/core';
import { TableServerSideComponent } from 'src/app/demo/components/table-server-side/table-server-side.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TableServerSideComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
    cols: any[] = [];

    ngOnInit(): void {
        this.cols = [
            // basic data
            { field: 'name', header: 'Name' },
            { field: 'notes', header: 'Notes' },

            // Generic Fields
            { field: 'creationTime', header: 'CreationTime' },
            { field: 'lastModificationTime', header: 'Last ModificationTime' },
            { field: 'creatorName', header: 'Creator Name' },
            { field: 'lastModifierName', header: 'LastModifierName' },
        ];
    }
}
