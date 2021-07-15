import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-v1-about',
  templateUrl: './photo-v1-about.component.html',
  styleUrls: ['./photo-v1-about.component.css']
})
export class PhotoV1AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(dir: string) {
    let about = document.querySelector("div.content");
    if (dir === 'd') {
      about.scrollIntoView({ behavior: 'smooth' });
    }
  }

  rightClick() {
    return false;
  }
}
