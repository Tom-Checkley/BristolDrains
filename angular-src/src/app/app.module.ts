import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ImageUploadModule } from 'ng2-imageupload';

import { AppRoutingModule } from './app.routing-module';

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
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';






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
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    // Headers,
    BrowserAnimationsModule,
    FlashMessagesModule,
    ImageUploadModule,
    FormsModule,
    // NgModel,
  ],
  providers: [
    TestimonialService,
    BlogService,
    ValidateService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
