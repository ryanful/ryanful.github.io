import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-photo-v1-nav',
  templateUrl: './photo-v1-nav.component.html',
  styleUrls: ['./photo-v1-nav.component.css']
})
export class PhotoV1NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        let nav = document.querySelector("nav.nav");
        let menu = document.querySelector(".menu i");
        this.regNav(nav, menu);
        document.documentElement.scrollTo(0, 0);
      }

    });
  }



  onLanding() {
    console.log(this.router.url);
    return this.router.url === '/';
  }

  regNav(nav, menu) {
    if (nav !== null) { nav.className = "nav"; }
    if (menu !== null) {
      menu.id = "menu";
      menu.textContent = "menu";
    }
  }

  toggleNav() {
    let x = document.querySelector("nav.nav");
    let menu = document.querySelector(".menu i");
    if (x.className === "nav") {
      x.className += " responsive";
      menu.id = "close";
      menu.textContent = "close";
    } else {
      //regNav(x, menu);
      x.className = "nav";
      menu.id = "menu";
      menu.textContent = "menu";
    }
  }

  rightClick() {
    return false;
  }

}
