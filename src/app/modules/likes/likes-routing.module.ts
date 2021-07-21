import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikesComponent } from './page/likes.component';

const routes: Routes = [
    {
        path: '',
        component: LikesComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LikesRoutingModule { }