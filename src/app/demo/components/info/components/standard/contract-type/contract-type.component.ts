import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StdPaginationsWithPopupComponent } from 'src/app/demo/components/std-paginations-with-popup/std-paginations-with-popup.component';

@Component({
  imports: [StdPaginationsWithPopupComponent],
  selector: 'app-contract-type',
  templateUrl: './contract-type.component.html',
  styleUrl: './contract-type.component.scss',
  providers: [MessageService],
  standalone: true,
})
export class ContractTypeComponent {

}
