import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StdPaginationsWithPopupComponent } from '../../../../std-paginations-with-popup/std-paginations-with-popup.component';

@Component({
  selector: 'app-govenment',
  templateUrl: './govenment.component.html',
  styleUrl: './govenment.component.scss',
  providers: [MessageService],
  standalone: true,
  imports: [StdPaginationsWithPopupComponent]
})
export class GovenmentComponent {



}
