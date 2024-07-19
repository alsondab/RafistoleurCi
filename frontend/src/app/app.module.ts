import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListrafComponent } from './pages/listraf/listraf.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './pages/Partials/navbar/navbar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './pages/Partials/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { RafistoleurCreateComponent } from './pages/rafistoleur-create/rafistoleur-create.component';
import { LoaderComponent } from './pages/Partials/loader/loader.component';
import { RafistoleurPageComponent } from './pages/rafistoleur-page/rafistoleur-page.component';
import { RafistoleurEditComponent } from './pages/rafistoleur-edit/rafistoleur-edit.component';
import { AdminComponent } from './pages/Admin/admin/admin.component';
import { AdminLogComponent } from './pages/Admin/admin-log/admin-log.component';
import { AdminSignComponent } from './pages/Admin/admin-sign/admin-sign.component';
import { RafSignComponent } from './pages/Rafisto/raf-sign/raf-sign.component';
import { RafLogComponent } from './pages/Rafisto/raf-log/raf-log.component';
import { RafComponent } from './pages/Rafisto/raf/raf.component';

// Define your routes here if needed
const routes: Routes = [
  // { path: '', component: HomePageComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // Add more routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListrafComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    RafistoleurCreateComponent,
    LoaderComponent,
    RafistoleurPageComponent,
    RafistoleurEditComponent,
    AdminComponent,
    AdminLogComponent,
    AdminSignComponent,
    RafSignComponent,
    RafLogComponent,
    RafComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // provideClientHydration() - Uncomment if it's correctly imported and needed
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
