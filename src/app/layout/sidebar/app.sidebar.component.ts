import { Component, ElementRef, OnInit } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import { Globals } from 'src/app/class/globals';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html',
    styleUrls: ['./app.sidebar.component.scss'],
})
export class AppSidebarComponent implements OnInit {
    constructor(
        private tranlate: TranslateService,
        public layoutService: LayoutService,
        public el: ElementRef
    ) {}
    ngOnInit() {
        Globals.getMainLangChanges().subscribe((mainLang) => {
            this.tranlate.use(mainLang);
        });
    }
}
