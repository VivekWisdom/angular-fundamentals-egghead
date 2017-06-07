import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages = [
    {id: 0, text: 'This is first'},
    {id: 1, text: 'And this is Second example.'},
    {id: 2, text: 'And this is another example.'}
  ];

  update(id, text){
    this.messages = this.messages.map(m =>
    m.id === id ? {id, text} : m);
  }
  constructor() { }

}
