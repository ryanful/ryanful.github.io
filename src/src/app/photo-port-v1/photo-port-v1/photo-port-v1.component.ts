import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-port-v1',
  templateUrl: './photo-port-v1.component.html',
  styleUrls: ['./photo-port-v1.component.css']
})
export class PhotoPortV1Component implements OnInit {
  title = 'Raheel\'s Portfolio';

  constructor() { }

  ngOnInit(): void {
  }

  onActivate(event: any, yer) {
    console.log("ROUTE", yer.activatedRoute);
    document.body.scrollTop = 0;
    document.body.scrollLeft = 0;

    let x = document.querySelector("nav.nav");
    if (x !== null) {
      let menu = document.querySelector(".menu i");
      if (x.className === "nav responsive") {
        x.className = "nav";
        menu.id = "menu";
        menu.textContent = "menu";
      }
    }

  }

}
