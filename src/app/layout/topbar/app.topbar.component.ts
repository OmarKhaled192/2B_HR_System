import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../service/app.layout.service';
import { TranslateService } from '@ngx-translate/core';
import { Globals } from 'src/app/class/globals';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls: ['./app.topbar.component.scss'],
})
export class AppTopBarComponent implements OnInit  {
    constructor(
        public layoutService: LayoutService,
        private translate: TranslateService) {
    }
    countries: any[] | undefined;

    selectedCountry: string | undefined;
    lang: any;
    langData: any;
    themeSelected: any;

    ngOnInit() {

        this.countries = [
            { name: 'العربية', code: 'EG', lang: 'ar' },
            { name: 'English', code: 'US', lang: 'en' },
        ];


        // for arabic
        this.translate.setDefaultLang('ar');
        document.dir = 'rtl';
        document.documentElement.lang = 'ar';
        this.selectedCountry = this.countries[0];

        // for english
        // this.translate.setDefaultLang('en');
        // document.dir = 'ltr';
        // document.documentElement.lang = 'en';
        // this.selectedCountry = this.countries[1];


       this.theme = localStorage.getItem("theme").toString();

       if(this.theme == "arya-orange") {
            this.themeSelected = true;
       } else {
            this.themeSelected = false;
       }

        //    this.lang =  localStorage.getItem("currentLang").toString();

        //     this.translate.use(this.lang).subscribe(() => {
        //             document.dir = this.langData.DIR; // Default to 'ltr' if dir is undefined
        //             document.documentElement.lang = this.langData.lang; // Default to lang if lang is undefined
        //     });

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
        if (this.theme == 'saga-orange') {
            localStorage.setItem("theme", "arya-orange");
            this.theme = 'arya-orange';
            this.themeSelected = false;
        } else {
            this.theme = 'saga-orange';
            localStorage.setItem("theme", "saga-orange");
            this.themeSelected = true;
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

            // set lang at Globals
            Globals.setMainLang(lang);
        });
    }
}
