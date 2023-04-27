import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './log-in/login/login.component';
import { SignUpComponent } from './sign-up/sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { MainAppComponent } from './main-app/main-app/main-app.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    AppComponent,
    MainAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
