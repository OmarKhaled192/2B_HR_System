import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VacationComponent } from './vacation/vacation.component';
import { BankComponent } from './bank/bank.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'vacation', component: VacationComponent },
            { path: 'bank', component: BankComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class InfoRoutingModule {}
