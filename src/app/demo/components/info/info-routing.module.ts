import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VacationComponent } from './vacation/vacation.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'vacation', component: VacationComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class InfoRoutingModule {}
