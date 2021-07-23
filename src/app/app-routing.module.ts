import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'likes',
    loadChildren: () => import('@modules/likes/likes.module').then(m => m.LikesModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('@modules/upload/upload.module').then(m => m.UploadModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
