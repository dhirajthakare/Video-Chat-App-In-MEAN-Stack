import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo:'chat',pathMatch:'full'},
  {
    path: 'videochat/:',
    loadChildren: () =>
      import('./module/video-call/video-call.module').then(
        (m) => m.VideoCallModule
      ),
  },
  { path: 'chat', loadChildren: () => import('./module/realtime-chat-app/realtime-chat-app.module').then(m => m.RealtimeChatAppModule) },
  { path: 'navbar', loadChildren: () => import('./common/navbar/navbar.module').then(m => m.NavbarModule) },
  { path: 'deskbookCall', loadChildren: () => import('./module/deskbook-call/deskbook-call.module').then(m => m.DeskbookCallModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
