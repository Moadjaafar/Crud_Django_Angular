import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartementComponent } from './departement/departement.component';
import { ShowDepComponent } from './Departement/show-dep/show-dep.component';
import { AddEditDepComponent } from './Departement/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEditEmpComponent } from './Employee/add-edit-emp/add-edit-emp.component';
import { ShowEmpComponent } from './Employee/show-emp/show-emp.component';
import { SharedDataService } from './shared-data.service';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    AppComponent,
    DepartementComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    AddEditEmpComponent,
    ShowEmpComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
