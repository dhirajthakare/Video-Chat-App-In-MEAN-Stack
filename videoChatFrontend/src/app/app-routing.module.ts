import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo:'videochat/dhirajroom',pathMatch:'full'},
  {
    path: 'videochat/:',
    loadChildren: () =>
      import('./module/video-call/video-call.module').then(
        (m) => m.VideoCallModule
      ),
  },
  { path: 'chat', loadChildren: () => import('./module/realtime-chat-app/realtime-chat-app.module').then(m => m.RealtimeChatAppModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
