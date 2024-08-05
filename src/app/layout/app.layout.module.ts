import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { AppConfigModule } from './config/config.module';
import { AppFooterComponent } from './footer/app.footer.component';
import { AppLayoutComponent } from './app-layout/app.layout.component';
import { AppMenuComponent } from './menu/app.menu.component';
import { AppMenuitemComponent } from './menu-item/app.menuitem.component';
import { AppSidebarComponent } from './sidebar/app.sidebar.component';
import { AppTopBarComponent } from './topbar/app.topbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule,
        TranslateModule,
        DropdownModule,
        FormsModule,
        CalendarModule,
    ],
    exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
