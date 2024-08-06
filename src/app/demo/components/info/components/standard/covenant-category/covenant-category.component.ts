import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StdPaginationsWithPopupComponent } from 'src/app/demo/components/std-paginations-with-popup/std-paginations-with-popup.component';

@Component({
  selector: 'app-covenant-category',
  templateUrl: './covenant-category.component.html',
  styleUrl: './covenant-category.component.scss',
  providers: [MessageService],
  standalone: true,
  imports: [StdPaginationsWithPopupComponent]
})
export class CovenantCategoryComponent {

}
