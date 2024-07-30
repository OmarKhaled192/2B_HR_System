import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StdPaginationsWithPopupComponent } from '../../std-paginations-with-popup/std-paginations-with-popup.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
  providers: [MessageService],
  standalone: true,
  imports: [StdPaginationsWithPopupComponent]
})
export class LocationComponent {

}
