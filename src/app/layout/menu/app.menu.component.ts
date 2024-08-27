import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    styleUrls: ['./app.menu.component.scss'],
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(
        public layoutService: LayoutService,
        private translate: TranslateService
    ) {}
    ngOnInit() {
        this.model = [
            {
                label: this.translate.instant('HOME'),
                items: [
                    {
                        label: this.translate.instant('DASHBOARD'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/dashboard'],
                    },
                ],
            },
            {
                label: this.translate.instant('INFO'),
                items: [
                    {
                        label: this.translate.instant('DEPARTMENT'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/department'],
                    },
                    {
                        label: this.translate.instant('BANK'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/bank'],
                    },
                    {
                        label: this.translate.instant('GOVERNMENT'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/government'],
                    },
                    {
                        label: this.translate.instant('GRADE'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/grade'],
                    },
                    {
                        label: this.translate.instant('JOB'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/job'],
                    },
                    {
                        label: this.translate.instant('LOCATION'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/location'],
                    },
                    {
                        label: this.translate.instant('PARTITION'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/partition'],
                    },
                    {
                        label: this.translate.instant('QUALIFICATION'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/qualification'],
                    },
                    {
                        label: this.translate.instant('SHIFT'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/shift'],
                    },
                    {
                        label: this.translate.instant('Public Vacation'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/publicVacation'],
                    },
                    {
                        label: this.translate.instant('Shift Vacation'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/shiftVacation'],
                    },
                    {
                        label: this.translate.instant('Relative Relation'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/relativeRelation'],
                    },
                    {
                        label: this.translate.instant('Contract Type'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/contractType'],
                    },
                    {
                        label: this.translate.instant('Job Nature'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/jobNature'],
                    },
                    {
                        label: this.translate.instant('Recruitment Source'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/recuritmentSource'],
                    },
                    {
                        label: this.translate.instant('Document Required'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/documentRequired'],
                    },
                    {
                        label: this.translate.instant('Uniform Codes'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/uniformCodes'],
                    },
                    {
                        label: this.translate.instant('Vacation Settings'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/vacationSetting'],
                    },
                    {
                        label: this.translate.instant('CONVENATCATEGORY'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/CovenantCategory'],
                    },
                    {
                        label: this.translate.instant('CONVENAT'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/Covenant'],
                    },
                    {
                        label: this.translate.instant('Company Policy'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/companyPolicy'],
                    },
                    {
                        label: this.translate.instant('Execuse Type'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/execuseType'],
                    },
                    {
                        label: this.translate.instant('Close Month'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/closeMonth'],
                    },
                    {
                        label: this.translate.instant('Vacation Type'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/vacationType'],
                    },
                    {
                        label: this.translate.instant('All Employees Covenant'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/allEmployeesCovenant'],
                    },
                    {
                        label: this.translate.instant('All Employees File'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/allEmployeesFile'],
                    },
                    {
                        label: this.translate.instant('All Employees Location'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/allEmployeesLocation'],
                    },

                    {
                        label: this.translate.instant('All Employees Manager'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/allEmployeesManager'],
                    },
                    {
                        label: this.translate.instant('All Employees Uniform'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/allEmployeesUniform'],
                    },
                    {
                        label: this.translate.instant('All Employees'),
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/info/employees'],
                    },
                    {
                        label: this.translate.instant('EMPLOYEE_DATA'),
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/info/employee'],
                    },
                ],
            },

            {
                label: 'UI Components',
                items: [
                    {
                        label: this.translate.instant('FORM_LAYOUT'),
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/uikit/formlayout'],
                    },
                    {
                        label: this.translate.instant('INPUT'),
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/uikit/input'],
                    },
                    {
                        label: this.translate.instant('FLOAT_LABEL'),
                        icon: 'pi pi-fw pi-bookmark',
                        routerLink: ['/uikit/floatlabel'],
                    },
                    {
                        label: this.translate.instant('INVALID_STATE'),
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/uikit/invalidstate'],
                    },
                    {
                        label: this.translate.instant('BUTTON'),
                        icon: 'pi pi-fw pi-box',
                        routerLink: ['/uikit/button'],
                    },
                    {
                        label: this.translate.instant('TABLE'),
                        icon: 'pi pi-fw pi-table',
                        routerLink: ['/uikit/table'],
                    },
                    {
                        label: this.translate.instant('LIST'),
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/uikit/list'],
                    },
                    {
                        label: this.translate.instant('TREE'),
                        icon: 'pi pi-fw pi-share-alt',
                        routerLink: ['/uikit/tree'],
                    },
                    {
                        label: this.translate.instant('PANEL'),
                        icon: 'pi pi-fw pi-tablet',
                        routerLink: ['/uikit/panel'],
                    },
                    {
                        label: this.translate.instant('OVERLAY'),
                        icon: 'pi pi-fw pi-clone',
                        routerLink: ['/uikit/overlay'],
                    },
                    {
                        label: this.translate.instant('MEDIA'),
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['/uikit/media'],
                    },
                    {
                        label: this.translate.instant('MENU'),
                        icon: 'pi pi-fw pi-bars',
                        routerLink: ['/uikit/menu'],
                        routerLinkActiveOptions: {
                            paths: 'subset',
                            queryParams: 'ignored',
                            matrixParams: 'ignored',
                            fragment: 'ignored',
                        },
                    },
                    {
                        label: this.translate.instant('MESSAGE'),
                        icon: 'pi pi-fw pi-comment',
                        routerLink: ['/uikit/message'],
                    },
                    {
                        label: this.translate.instant('FILE'),
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['/uikit/file'],
                    },
                    {
                        label: this.translate.instant('CHART'),
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['/uikit/charts'],
                    },
                    {
                        label: this.translate.instant('MISC'),
                        icon: 'pi pi-fw pi-circle',
                        routerLink: ['/uikit/misc'],
                    },
                ],
            },
            {
                label: this.translate.instant('UTILITIES'),
                items: [
                    {
                        label: this.translate.instant('PRIMEICONS'),
                        icon: 'pi pi-fw pi-prime',
                        routerLink: ['/utilities/icons'],
                    },
                ],
            },
            {
                label: this.translate.instant('PAGES'),
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: this.translate.instant('STD_TEST'),
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/test'],
                    },
                    {
                        label: this.translate.instant('LANDING'),
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing'],
                    },
                    {
                        label: this.translate.instant('AUTH'),
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: this.translate.instant('LOGIN'),
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login'],
                            },
                            {
                                label: this.translate.instant('ERROR'),
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error'],
                            },
                            {
                                label: this.translate.instant('ACCESS_DENIED'),
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access'],
                            },
                        ],
                    },
                    {
                        label: this.translate.instant('CRUD'),
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud'],
                    },
                    {
                        label: this.translate.instant('TIMELINE'),
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/pages/timeline'],
                    },
                    {
                        label: this.translate.instant('NOT_FOUND'),
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/notfound'],
                    },
                    {
                        label: this.translate.instant('EMPTY'),
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty'],
                    },
                    {
                        label: this.translate.instant('PAGINATION'),
                        icon: 'pi pi-fw pi-table',
                        routerLink: ['/pages/pagination'],
                    },
                    {
                        label: this.translate.instant('TEST'),
                        icon: 'pi pi-fw pi-table',
                        routerLink: ['/pages/pagination/test'],
                    },
                    {
                        label: this.translate.instant('PAGINATION_POPUP'),
                        icon: 'pi pi-fw pi-th-large',
                        routerLink: ['/pages/pagination-popup'],
                    },
                ],
            },
            {
                label: this.translate.instant('HIERARCHY'),
                items: [
                    {
                        label: this.translate.instant('SUBMENU'),
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: this.translate.instant('SUBMENU_1_1'),
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {
                                        label: this.translate.instant(
                                            'SUBMENU_1_1_1'
                                        ),
                                        icon: 'pi pi-fw pi-bookmark',
                                    },
                                    {
                                        label: this.translate.instant(
                                            'SUBMENU_1_1_2'
                                        ),
                                        icon: 'pi pi-fw pi-bookmark',
                                    },
                                    {
                                        label: this.translate.instant(
                                            'SUBMENU_1_1_3'
                                        ),
                                        icon: 'pi pi-fw pi-bookmark',
                                    },
                                ],
                            },
                            {
                                label: this.translate.instant('SUBMENU_1_2'),
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    {
                                        label: this.translate.instant(
                                            'SUBMENU_1_2_1'
                                        ),
                                        icon: 'pi pi-fw pi-bookmark',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ];
    }
}
