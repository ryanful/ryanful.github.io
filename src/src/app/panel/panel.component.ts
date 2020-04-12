import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ImagesService } from '../images.service';
import { Image } from '../photogroup';
import { Panel } from '../photo-info';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input('panel') panel: Panel; //which panel
  title = "Graduation"; //add to photo-info.ts
  path: string;
  images: Image[];

  //for scrolling
  @ViewChildren('image') elements: QueryList<ElementRef>;
  index = 0;
  showLeft = false;
  showRight = true;

  constructor(private imagesService: ImagesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    /*console.log("panelid" + this.id);
    let photos = this.imagesService.getPhotos(this.id);
    this.title = photos.title;
    this.path = photos.path;
    console.log("path" + this.path);
    this.images = photos.images;*/
    this.route.paramMap
      .subscribe(params => {
        let id = params.get("id");
        if (id !== null) {
          console.log("PANEEL SWITCH");
          this.panel = this.imagesService.getWorkPanels().find(d => d.id === id);
        }

      });
  }



  scroll(dir) {
    let panel = document.querySelector("div#" + this.panel.id + " div.panel-images");
    let viewWidth = panel.clientWidth;
    let moveAmt = .5 * viewWidth;

    if (dir === 'l') {
      panel.scrollLeft -= panel.scrollLeft % moveAmt + moveAmt;
    }
    else if (dir === 'r') {
      panel.scrollLeft += moveAmt - panel.scrollLeft % moveAmt;
    }
  }

  checkArrows() {
    let panel = document.querySelector("div#" + this.panel.id + " div.panel-images");
    let viewWidth = panel.clientWidth;
    let panelEnd = panel.scrollWidth - panel.clientWidth;
    if (panel.scrollLeft === 0) { this.showLeft = false; }
    else { this.showLeft = true; }

    if (panel.scrollLeft >= panelEnd) {
      this.showRight = false;
    }
    else { this.showRight = true }
  }

  elementVisible(isVis: boolean) {
    return isVis ? 'visible' : 'hidden';
  }

}
