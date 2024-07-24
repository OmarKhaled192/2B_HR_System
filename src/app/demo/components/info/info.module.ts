import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRoutingModule } from './info-routing.module';
import { VacationComponent } from './vacation/vacation.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [CommonModule, InfoRoutingModule, SplitButtonModule],
    declarations: [VacationComponent],
})
export class InfoModule {}
