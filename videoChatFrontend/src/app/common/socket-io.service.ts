import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  constructor() { }
    socket = io('http://backend-for-video-chat-app.onrender.com');

    createRoom(ROOM_ID:any,userName:any,userId:any,){
      this.socket.emit('join-room',ROOM_ID,userName,userId)
    }

    getConnecteduser(){
      let observable = new Observable<any>(
        (observer) => {
          this.socket.on('user-connected', (UserId) => {
            observer.next(UserId);
          });
          return () => {
            // this.socket.disconnect();
          };
        }
      );
  
      return observable;
    } 

    sendmessage(message:any){
      this.socket.emit('sendmessage',message);
    }

    getMessage(){
      let observable = new Observable<any>(
        (observer) => {
          this.socket.on('getmessage', (messageDetails) => {
            observer.next(messageDetails);
          });
          return () => {
            // this.socket.disconnect();
          };
        }
      );
  
      return observable;
    }
    
    leaveRoom(){
      this.socket.emit('leave room')
    }
    getLeaveRoomuser(){
      let observable = new Observable<any>(
        (observer) => {
          this.socket.on('leave room user', (res) => {
            observer.next(res);
          });
          return () => {
            // this.socket.disconnect();
          };
        }
      );
  
      return observable;
    }

}
