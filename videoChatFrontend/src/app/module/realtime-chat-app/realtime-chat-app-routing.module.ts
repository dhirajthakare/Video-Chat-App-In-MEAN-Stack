import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealtimeChatAppComponent } from './realtime-chat-app.component';

const routes: Routes = [{ path: '', component: RealtimeChatAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealtimeChatAppRoutingModule { }
