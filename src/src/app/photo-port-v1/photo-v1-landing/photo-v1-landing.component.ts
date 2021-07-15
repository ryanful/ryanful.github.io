import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-v1-landing',
  templateUrl: './photo-v1-landing.component.html',
  styleUrls: ['./photo-v1-landing.component.css']
})
export class PhotoV1LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rightClick() {
    return false;
  }

}
