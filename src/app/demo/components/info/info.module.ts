import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRoutingModule } from './info-routing.module';
import { VacationComponent } from './vacation/vacation.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DepartmentComponent } from './department/department.component';

@NgModule({
    imports: [CommonModule, InfoRoutingModule, SplitButtonModule],
    declarations: [VacationComponent, DepartmentComponent],
})
export class InfoModule {}
