import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photobook-header',
  templateUrl: './photobook-header.component.html',
  styleUrls: ['./photobook-header.component.css']
})
export class PhotobookHeaderComponent implements OnInit {

  @Input('title') title: string; //title for header

  constructor() { }

  ngOnInit(): void {
  }

}
