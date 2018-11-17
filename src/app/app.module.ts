import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent, LoginComponent, HeaderComponent, LandedComponent, RegisterComponent  } from '@components';
import { ShippingModule } from './shipping/shipping.module';
import { RouterModule } from '../../node_modules/@angular/router';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { UiuxModule } from './_shared/uiux.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    LandedComponent
  ],
  imports: [
    BrowserModule,
    ShippingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UiuxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
