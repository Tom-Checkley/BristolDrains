import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

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


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/clearance', component: ClearanceComponent},
  { path: 'services/cctv', component: CctvComponent},
  { path: 'services/installation', component: InstallationComponent},
  { path: 'services/tanker', component: TankerComponent},
  { path: 'services/repairs', component: RepairsComponent},
  { path: 'contact', component: ContactComponent},
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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
