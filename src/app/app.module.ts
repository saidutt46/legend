import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandedComponent } from './components/landed/landed.component';
import { HeaderComponent } from './components/header/header.component';
import { ShippingModule } from './components/shipping/shipping.module';
import { RouterModule } from '../../node_modules/@angular/router';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShippingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
