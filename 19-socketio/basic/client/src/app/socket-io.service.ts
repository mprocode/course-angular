import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Message } from './message';

import * as socketio from 'socket.io-client';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  private url =  'http://localhost:4444';
  private socket = socketio(this.url);
  private subjMessages: Subject<Message> = new Subject<Message>();
  public message$ = this.subjMessages.asObservable();// = this.socket.fromEvent<Message>('message');

  constructor(
  //  private socket: Socket
  ) {
    // this.message$.subscribe(s => console.log(s));

    this.socket.on('message', (m: Message) => {
      this.subjMessages.next(m);
    });
  }

  send(msg: Message) {
    //this.socket.emit('message', msg);
    this.socket.emit('message', msg);
  }
  
}
