import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UiuxModule } from '../../_shared/uiux.module';

import { HomeComponent, LandedComponent, LoginComponent, HeaderComponent, RegisterComponent } from '@components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiuxModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    HomeComponent,
    LandedComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ],
  exports: [
    HomeComponent,
    LandedComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ]
})
export class ShippingModule { }
