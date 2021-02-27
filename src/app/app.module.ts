import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ResViewComponent } from './views/res-view/res-view.component';
import { HeaderComponent } from './views/shared-view/header/header.component';
import { FooterComponent } from './views/shared-view/footer/footer.component';
import { Section1SecComponent } from './views/home-view/section1-sec/section1-sec.component';
import { StatistiquesSecComponent } from './views/home-view/statistiques-sec/statistiques-sec.component';
import { SportTypeSecComponent } from './views/res-view/sport-type-sec/sport-type-sec.component';
import { CalendarSecComponent } from './views/res-view/calendar-sec/calendar-sec.component';
import { CoachsListSecComponent } from './views/res-view/coachs-list-sec/coachs-list-sec.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginViewComponent } from './views/auth-view/login-view/login-view.component';
import { RegisterViewComponent } from './views/auth-view/register-view/register-view.component';
import { CoachlistHomeSecComponent } from './views/home-view/coachlist-home-sec/coachlist-home-sec.component';
import {FormsModule} from '@angular/forms';
import {AuthComponent} from './views/auth-view/auth/auth.component';




const appRoutes: Routes = [
  {path: '', component: HomeViewComponent},
  {path: 'reservation', component: ResViewComponent},
  {path: 'reservation/:sportType/:coach', component: ResViewComponent},
  {path: 'login', component: LoginViewComponent},
  {path: 'register', component: RegisterViewComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    ResViewComponent,
    HeaderComponent,
    FooterComponent,
    Section1SecComponent,
    StatistiquesSecComponent,
    SportTypeSecComponent,
    CalendarSecComponent,
    CoachsListSecComponent,
    LoginViewComponent,
    RegisterViewComponent,
    CoachlistHomeSecComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
