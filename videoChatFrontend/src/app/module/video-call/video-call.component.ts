import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocketIoService } from 'src/app/common/socket-io.service';
import { environment } from 'src/environments/environment';
declare var Peer: any;

@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.scss'],
})
export class VideoCallComponent implements OnInit, AfterViewInit {
  constructor(
    private socket: SocketIoService,
    private activerouter: ActivatedRoute
  ) {}

  userName: any = '';
  peer: any;
  myVideoStream: any;
  myVideo = document.createElement('video');
  copyURl: any = window.location.href;

  anotherid: any;
  mypeerid: any;
  ngOnInit(): void {
    this.userName = prompt('Enter your name');
    this.myVideo.muted = true;
    // this.userName = "dhiraj";

    this.getLatestConnectedUser();
    this.makePeerConnection();
    this.getMessage();
    this.getleaveroomData();
  }

  ngAfterViewInit(): void {}

  getLatestConnectedUser() {
    this.socket.getConnecteduser().subscribe((res) => {
      if (res) {
        this.connectToNewUser(res, this.myVideoStream);
      }
    });
  }

  makePeerConnection() {
    this.peer = new Peer({
      host:
        window.location.hostname != 'localhost'
          ? environment.ServerDomain
          : environment.LocalServerDomain,
      port:
        window.location.hostname == 'localhost'
          ? environment.LocalServerPort
          : environment.ServerPort,
      path: '/peerjs',
      // debug: 3
    });

    this.peer.on('open', (id: any) => {
      console.log('my id is ' + id);
      this.socket.createRoom(
        this.activerouter.snapshot.params[''],
        this.userName,
        id
      );
      // socket.emit("join-room", ROOM_ID, id, user);
    });

    let data = navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true,
      })
      .then((stream: any) => {
        this.myVideoStream = stream;

        this.addVideoStream(this.myVideo, stream);

        this.peer.on('call', (call: any) => {
          console.log(call);

          console.log('someone call me ', call.peer);
          call.answer(stream);
          const video = document.createElement('video');

          call.on('stream', (userVideoStream: any) => {
            this.addVideoStream(video, userVideoStream);
          });
        });
      });
  }

  addVideoStream(myVideo: any, stream: any) {
    myVideo.srcObject = stream;
    myVideo.addEventListener('loadedmetadata', () => {
      myVideo.play();
      document.getElementById('video-grid')?.appendChild(myVideo);
    });
  }

  connectToNewUser = (userId: any, stream: any) => {
    console.log('I call someone ' + userId);
    let call = this.peer.call(userId, stream);
    const video = document.createElement('video');
    call.on('stream', (userVideoStream: any) => {
      this.addVideoStream(video, userVideoStream);
    });
  };

  myVideoClass = 'fa fa-video-camera';
  myAudioClass = 'fa fa-microphone';
  muteOrUnmuteVideo() {
    let enabled: any = this.myVideoStream.getVideoTracks()[0].enabled;
    if (enabled) {
      this.myVideoStream.getVideoTracks()[0].enabled = false;
      this.myVideoClass = 'fa fa-video-slash';
    } else {
      this.myVideoStream.getVideoTracks()[0].enabled = true;
      this.myVideoClass = 'fa fa-video-camera';
    }
  }
  muteOrUnmuteAudio() {
    let enabled: any = this.myVideoStream.getAudioTracks()[0].enabled;
    if (enabled) {
      this.myVideoStream.getAudioTracks()[0].enabled = false;
      this.myAudioClass = 'fas fa-microphone-slash';
    } else {
      this.myVideoStream.getAudioTracks()[0].enabled = true;
      this.myAudioClass = 'fas fa-microphone';
    }
  }

  sendVideoLink() {
    prompt(
      'Copy this link and send it to people you want to meet with',
      window.location.href
    );
  }

  textMessage: any;
  sendMessage() {
    if (this.textMessage) {
      this.socket.sendmessage(this.textMessage);
      this.textMessage = '';
    }
  }

  allMessage: any = [];
  getMessage() {
    this.socket.getMessage().subscribe((res: any) => {
      this.allMessage.push({
        message: res.message,
        userName: res.userName,
      });
    });
  }

  leaveRoom() {
    // this.route.navigate(['chat']);
    this.socket.leaveRoom();
  }
  getleaveroomData() {
    this.socket.getLeaveRoomuser().subscribe((res) => {
      console.log(res);
    });
  }

  ngOnDestroy() {
    console.log('Destroy Componant');
  }
}
