import { Component } from '@angular/core';
import { TableServerSideComponent } from '../../table-server-side/table-server-side.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TableServerSideComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

}
