import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'request', loadChildren: './request/request.module#RequestPageModule' },
  { path: 'biblestudy', loadChildren: './biblestudy/biblestudy.module#BiblestudyPageModule' },
  { path: 'viewstudy', loadChildren: './viewstudy/viewstudy.module#ViewstudyPageModule' },
  { path: 'donate', loadChildren: './donate/donate.module#DonatePageModule' },
  { path: 'selectpaymentmethod', loadChildren: './selectpaymentmethod/selectpaymentmethod.module#SelectpaymentmethodPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
