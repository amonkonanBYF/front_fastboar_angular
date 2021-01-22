import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [

  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'register',
    component: SigninComponent
  }, 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'userprofile',
    component: ProfileComponent
  },
  {
    path: 'userprofile/:id',
    component: ProfileComponent
  },
  {
    path: 'serverprofile',
    component: HomepageComponent
  },
  {
    path: 'serverprofile/:id',
    component: HomepageComponent
  },
  {
    path: 'adminprofile',
    component: HomepageComponent
  },
  {
    path: 'adminprofile/:id',
    component: HomepageComponent
  },
   /// Fallbacks
   { path: '', redirectTo: 'homepage', pathMatch: 'full' },
   { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
