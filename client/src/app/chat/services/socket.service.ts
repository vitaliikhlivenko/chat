import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';
import { Message } from '../chat.types';

const SERVER_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket;

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public send(message: Message): void {
    this.socket.emit('SEND_MESSAGE', message);
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
        this.socket.on('ADD_MESSAGE', (data: Message) => observer.next(data));
    });
}


}
