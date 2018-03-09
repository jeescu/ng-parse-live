import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "app/shared/shared.module";

import { AppComponent } from './app.component';

import { ShortenPipe } from "app/shorten.pipe";

import { HeaderComponent } from "app/header/header.component";
import { HomeComponent } from "app/home/home.component";
import { ChartComponent } from "app/home/chart/chart.component";
import { ValidatorComponent } from './validator/validator.component';
import { ReporterComponent } from './reporter/reporter.component';
import { ResponseComponent } from './validator/response/response.component';
import { FormComponent } from './reporter/form/form.component';

import { ResponseService } from "app/shared/response.service";
import { DataStorageService } from "app/shared/data-storage.service";
import { AuthService } from "app/auth/auth.service";

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, // Ideally this is the only declarations left in your app module. other declarations are in other modules
    ShortenPipe,
    ValidatorComponent,
    ReporterComponent,
    ResponseComponent,
    FormComponent,
    HeaderComponent,
    HomeComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DataStorageService,
    ResponseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
