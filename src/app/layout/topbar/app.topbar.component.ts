import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../service/app.layout.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls: ['./app.topbar.component.scss'],
})
export class AppTopBarComponent implements OnInit {
    constructor(
        public layoutService: LayoutService,
        private translate: TranslateService
    ) {}
    countries: any[] | undefined;

    selectedCountry: string | undefined;

    ngOnInit() {
        // for arabic
        // this.translate.setDefaultLang('ar');
        // document.dir = 'rtl';
        // document.documentElement.lang = 'ar';

        // for english
        this.translate.setDefaultLang('en');
        document.dir = 'ltr';
        document.documentElement.lang = 'en';

        this.countries = [
            { name: 'العربية', code: 'EG', lang: 'ar' },
            { name: 'English', code: 'US', lang: 'en' },
        ];
        this.selectedCountry = this.countries[0];
    }
    set theme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            theme: val,
        }));
    }
    get theme(): string {
        return this.layoutService.config().theme;
    }
    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    changeThemeFun() {
        // entry 0 % 2 == 0 ==> true
        if (this.theme == 'saga-orange') {
            this.theme = 'arya-orange';
        } else {
            this.theme = 'saga-orange';
        }
    }
    changeLang(event: any) {
        const lang = event.value.lang;
        localStorage.setItem('currentLang', lang);

        this.translate.use(lang).subscribe(() => {
            const langData = this.translate.translations[lang];

            if (langData) {
                document.dir = langData.DIR; // Default to 'ltr' if dir is undefined
                document.documentElement.lang = langData.lang; // Default to lang if lang is undefined
            }
        });
    }
}
