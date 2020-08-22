import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './admin.component'
import { AdminRoutingModule } from './admin-routing.module';
import { QcrudComponent } from './qcrud/qcrud.component';
import {FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [AdminComponent, QcrudComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AdminModule { }
