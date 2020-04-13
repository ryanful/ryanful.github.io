import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(dir: string) {
    let about = document.querySelector("div.content");
    if (dir === 'd') {
      about.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
