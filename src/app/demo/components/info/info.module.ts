import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRoutingModule } from './info-routing.module';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageService } from 'primeng/api';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    providers: [MessageService],
    imports: [CommonModule, InfoRoutingModule, SplitButtonModule, TranslateModule],
    declarations: [],
})
export class InfoModule {}
