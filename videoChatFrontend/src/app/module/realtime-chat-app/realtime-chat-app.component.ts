import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-realtime-chat-app',
  templateUrl: './realtime-chat-app.component.html',
  styleUrls: ['./realtime-chat-app.component.scss'],
})
export class RealtimeChatAppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event: any) {
    // execute code which call when browser tab close
  }
}
