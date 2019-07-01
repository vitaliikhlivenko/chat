import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SocketService } from './services/socket.service';
import { Message } from './chat.types';

@Component({
  selector: 'vk-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private socketService: SocketService
  ) { }

  form: FormGroup;
  messages: Message[] = [];

  ngOnInit() {
    this.formGenerator();
    this.initSocketConnection();
  }

  formGenerator() {
    this.form = this.fb.group({
      user: ['', Validators.required],
      message: ['']
    });
  }

  initSocketConnection() {
    this.socketService.initSocket();
    this.socketService.onMessage()
      .subscribe((message: Message) => {
        this.messages.push(message);
      });
  }

  send(data: Message) {
    this.socketService.send(data);
    this.form.patchValue({
      message: ''
    });
  }

}
