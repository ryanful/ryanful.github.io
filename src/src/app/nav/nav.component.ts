import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLanding() {
    console.log(this.router.url);
    return this.router.url === '/';
  }

  showNav() {
    let x = document.querySelector("nav.nav");
    let menu = document.querySelector(".menu i");
    if (x.className === "nav") {
      x.className += " responsive";
      menu.id = "close";
      menu.textContent = "close";
    } else {
      x.className = "nav";
      menu.id = "menu";
      menu.textContent = "menu";
    }
  }

}
