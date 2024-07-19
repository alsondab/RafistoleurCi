import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListrafComponent } from './pages/listraf/listraf.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { RafistoleurCreateComponent } from './pages/rafistoleur-create/rafistoleur-create.component';
import { RafistoleurPageComponent } from './pages/rafistoleur-page/rafistoleur-page.component';
import { RafistoleurEditComponent } from './pages/rafistoleur-edit/rafistoleur-edit.component';
import { AdminComponent } from './pages/Admin/admin/admin.component';
import { AdminLogComponent } from './pages/Admin/admin-log/admin-log.component';
import { AdminSignComponent } from './pages/Admin/admin-sign/admin-sign.component';
import { RafComponent } from './pages/Rafisto/raf/raf.component';
import { RafSignComponent } from './pages/Rafisto/raf-sign/raf-sign.component';
import { RafLogComponent } from './pages/Rafisto/raf-log/raf-log.component';
import { AfterLoginService } from './Services/after-login.service';
import { BeforeLoginService } from './Services/before-login.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
    title: 'Home'
  },
  {
    path: 'admin-log',
    component: AdminLogComponent,
    title: 'admin'
  },
  {
    path: 'admin-sign',
    component: AdminSignComponent,
    title: 'admin-sign'
  },
  {
    path: 'admin',
    component: AdminComponent,
    title: 'admin-log'
  },
  {
    path: 'raf',
    component: RafComponent,
    title: 'RAF'
  },
  {
    path: 'raf-sign',
    component: RafSignComponent,
    title: 'raf-sign'
  },
  {
    path: 'raf-log',
    component: RafLogComponent,
    title: 'raf-log'
  },
  
  {
    path: 'rafistoleurs',
    component: RafistoleurPageComponent,
    title: 'Rafistoleur Lists'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'login',
    canActivate: [BeforeLoginService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'register',
    canActivate: [BeforeLoginService]
  },
  {
    path: 'rafistoleurs/create',
    component: RafistoleurCreateComponent,
    title: 'Rafistoleur create'
  },
  {
    path: 'rafistoleurs/:id/edit',
    component: RafistoleurEditComponent,
    title: 'Rafistoleur Edit'
  },
  {
    path: 'listraf',
    component: ListrafComponent,
    title: 'listraf'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'contact'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'about'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'profile',
    canActivate: [AfterLoginService]
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
