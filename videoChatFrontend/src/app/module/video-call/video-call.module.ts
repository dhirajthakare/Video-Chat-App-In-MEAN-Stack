import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoCallRoutingModule } from './video-call-routing.module';
import { VideoCallComponent } from './video-call.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VideoCallComponent
  ],
  imports: [
    CommonModule,
    VideoCallRoutingModule,
    FormsModule
  ]
})
export class VideoCallModule { }
