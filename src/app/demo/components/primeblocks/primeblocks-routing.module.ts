import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlocksComponent } from './blocks/blocks.component';
import { authGuard } from '../auth/auth.guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: BlocksComponent, canActivate: [authGuard] },
        ]),
    ],
    exports: [RouterModule],
})
export class PrimeBlocksRoutingModule {}
