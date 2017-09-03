import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from "angular2-flash-messages";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { CctvComponent } from './components/cctv/cctv.component';
import { TankerComponent } from './components/tanker/tanker.component';
import { ClearanceComponent } from './components/clearance/clearance.component';
import { InstallationComponent } from './components/installation/installation.component';
import { RepairsComponent } from './components/repairs/repairs.component';
import { ContactComponent } from './components/contact/contact.component';
import { TipsComponent } from './components/tips/tips.component';
import { LocationsComponent } from './components/locations/locations.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { BlogComponent } from './components/blog/blog.component';
import { RegisterComponent } from './components/register/register.component';

import { TestimonialService } from './services/testimonial.service';
import { BlogService } from './services/blog.service';
import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service";




const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/clearance', component: ClearanceComponent},
  { path: 'services/cctv', component: CctvComponent},
  { path: 'services/installation', component: InstallationComponent},
  { path: 'services/tanker', component: TankerComponent},
  { path: 'services/repairs', component: RepairsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'tips', component: TipsComponent},
  { path: 'locations', component: LocationsComponent},
  { path: 'testimonials', component: TestimonialsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PoliciesComponent,
    AboutComponent,
    ServicesComponent,
    CctvComponent,
    TankerComponent,
    ClearanceComponent,
    InstallationComponent,
    RepairsComponent,
    ContactComponent,
    TipsComponent,
    LocationsComponent,
    TestimonialsComponent,
    AdminComponent,
    LoginComponent,
    BlogComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FlashMessagesModule,
  ],
  providers: [
    TestimonialService,
    BlogService,
    ValidateService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
