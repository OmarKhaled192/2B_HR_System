import { Component } from '@angular/core';
import { StdPaginationComponent } from '../std-pagination/std-pagination.component';

@Component({
  selector: 'app-test-std',
  standalone: true,
  imports: [StdPaginationComponent],
  templateUrl: './test-std.component.html',
  styleUrl: './test-std.component.scss'
})
export class TestStdComponent {
    
}
