import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { Globals } from 'src/app/class/globals';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class LoginComponent {
    loginForm: FormGroup = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required]),
    });
    valCheck: string[] = ['remember'];

    password!: string;
    theme: string;

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService,
        private translate: TranslateService
    ) {}
    ngOnInit() {
        Globals.getMainLangChanges().subscribe({
            next: (lang) => {
                this.translate.use(lang).subscribe(() => {
                    const langData = this.translate.translations[lang];

                    console.log(langData);
                    if (langData) {
                        this.translate.use(lang);
                        document.dir = langData.DIR; // Default to 'ltr' if dir is undefined
                        document.documentElement.lang = langData.lang; // Default to lang if lang is undefined
                    }
                });
            },
        });
        this.theme = localStorage.getItem('theme')
            ? localStorage.getItem('theme')
            : 'saga-orange';
    }

    submitLoginForm(logForm: FormGroup) {
        if (logForm.status == 'VALID') {
            this.authService.login(logForm.value).subscribe({
                next: (res) => {
                    if (res.data.token && res.statusCode == 200) {
                        localStorage.setItem('userToken', res.data.token);
                        this.router.navigate(['/dashboard']);
                    }
                },
                error: (err) => {
                    if (err.status == 401) {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'You Are Unauthorized',
                            life: 3000,
                        });
                        this.router.navigate(['/login']);
                    } else {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: err.message,
                            life: 3000,
                        });
                    }
                },
            });
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Incorrect email or password',
                life: 3000,
            });
        }
    }
}
