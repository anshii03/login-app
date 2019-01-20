import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent }      from './welcome/welcome.component';
import { LoggedUserComponent }      from './logged-user/logged-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NeedAuthGuard }  from './login-auth.guard';
import { BehaviorSubject } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    LoggedUserComponent ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
