import { Component, OnInit, Input } from '@angular/core';
import { ImagesService } from '../images.service';
import { Image } from '../photogroup';
import { Panel } from '../photo-info';

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

  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    console.log(this.panel.id, this.panel.members[0].id);
    /*console.log("panelid" + this.id);
    let photos = this.imagesService.getPhotos(this.id);
    this.title = photos.title;
    this.path = photos.path;
    console.log("path" + this.path);
    this.images = photos.images;*/
  }

}
