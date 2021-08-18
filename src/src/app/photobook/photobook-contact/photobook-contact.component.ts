import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photobook-contact',
  templateUrl: './photobook-contact.component.html',
  styleUrls: ['./photobook-contact.component.css']
})
export class PhotobookContactComponent implements OnInit {

  name: string;
  email: string;
  subject: string;
  message: string;
  constructor() { }

  ngOnInit(): void {
  }


  submit() {
    const message = `Form works! Name is ${this.name}`;
    alert(message);
  }

}
