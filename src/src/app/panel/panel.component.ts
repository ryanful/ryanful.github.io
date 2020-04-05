import { Component, OnInit, Input } from '@angular/core';
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

}
