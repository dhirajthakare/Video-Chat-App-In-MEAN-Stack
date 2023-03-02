import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealtimeChatAppRoutingModule } from './realtime-chat-app-routing.module';
import { RealtimeChatAppComponent } from './realtime-chat-app.component';


@NgModule({
  declarations: [
    RealtimeChatAppComponent
  ],
  imports: [
    CommonModule,
    RealtimeChatAppRoutingModule
  ]
})
export class RealtimeChatAppModule { }
