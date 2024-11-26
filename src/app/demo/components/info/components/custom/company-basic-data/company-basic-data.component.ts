import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { GlobalsModule } from 'src/app/demo/modules/globals/globals.module';
import { PrimeNgModule } from 'src/app/demo/modules/primg-ng/prime-ng.module';

@Component({
  selector: 'app-company-basic-data',
  standalone: true,
  templateUrl: './company-basic-data.component.html',
  styleUrl: './company-basic-data.component.scss',
  providers: [MessageService],
  imports: [
      GlobalsModule,
      PrimeNgModule,
  ],

})
export class CompanyBasicDataComponent {

}
