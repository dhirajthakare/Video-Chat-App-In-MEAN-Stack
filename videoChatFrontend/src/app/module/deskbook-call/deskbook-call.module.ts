import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeskbookCallRoutingModule } from './deskbook-call-routing.module';
import { DeskbookCallComponent } from './deskbook-call.component';
import { FormsModule } from '@angular/forms';
import { AcceptCallComponent } from './accept-call/accept-call.component';


@NgModule({
  declarations: [
    DeskbookCallComponent,
    AcceptCallComponent
  ],
  imports: [
    CommonModule,
    DeskbookCallRoutingModule,
    FormsModule
  ]
})
export class DeskbookCallModule { }
