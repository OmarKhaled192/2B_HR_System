import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StdPaginationsWithPopupComponent } from '../../std-paginations-with-popup/std-paginations-with-popup.component';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss',
  providers: [MessageService],
  standalone: true,
  imports: [StdPaginationsWithPopupComponent]
})
export class JobComponent {

}
