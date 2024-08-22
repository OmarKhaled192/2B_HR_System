import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocumentationComponent } from './documentation.component';
import { authGuard } from '../auth/auth.guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: DocumentationComponent,
                canActivate: [authGuard],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class DocumentationRoutingModule {}
