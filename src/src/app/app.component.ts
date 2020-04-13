import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raheel\'s Portfolio';

  constructor() { }

  scrollTop(event: any) {
    document.body.scrollTop = 0;
    document.body.scrollLeft = 0;

    let x = document.querySelector("nav.nav");
    let menu = document.querySelector(".menu i");
    if (x.className === "nav responsive") {
      x.className = "nav";
      menu.id = "menu";
      menu.textContent = "menu";
    }
  }
}

