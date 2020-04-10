import { Component, OnInit, Input } from '@angular/core';
import { ImagesService } from '../images.service';
import { Image } from '../photogroup';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input('name') id: string; //which gallery
  path: string;
  images: Image[];
  isProj: boolean;

  constructor(private imagesService: ImagesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let id: string;
        if (this.id === undefined) {
          id = params.get("id");
        }
        else {
          id = this.id;
        }
        console.log("gallery id check:", id, this.id);
        let photos = this.imagesService.getPhotos(id);
        this.path = photos.path;
        this.images = photos.images;
        this.isProj = id.substr(0, 4) === 'proj';
      });
    //let photos = this.imagesService.getPhotos(this.id);
    //this.path = photos.path;
    //this.images = photos.images;
  }

  setBackground(isOdd) {
    console.log("we tried");
    // document.querySelector("div.image").setAttribute("background-color", "#e8d8c3");
    return isOdd ? "#e8d8c3" : "none";
  }


}
