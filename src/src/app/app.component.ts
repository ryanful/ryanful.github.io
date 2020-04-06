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
  }
}

