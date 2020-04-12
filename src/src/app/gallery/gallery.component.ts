import { Component, OnInit, Input } from '@angular/core';
import { ImagesService } from '../images.service';
import { Image } from '../photogroup';
import { ActivatedRoute } from '@angular/router';
import { PanelMember } from '../photo-info';

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
  details: Image;

  //images controls
  showLeft = false;
  showRight = true;

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
        this.details = this.imagesService.getProjectDetails(id)
        this.path = photos.path;
        this.images = photos.images;
        this.isProj = id.substr(0, 4) === 'proj';
      });

    //let photos = this.imagesService.getPhotos(this.id);
    //this.path = photos.path;
    //this.images = photos.images;
  }

  setBackground(isOdd) {
    // console.log("we tried");
    // document.querySelector("div.image").setAttribute("background-color", "#e8d8c3");
    return isOdd ? "#e8d8c3" : "none";
  }

  scroll(dir) {
    let gallery = document.querySelector("div#proj-gallery");
    let bodyWidth = document.documentElement.clientWidth;
    let moveAmt = .5 * bodyWidth;

    if (dir === 'd') {
      gallery.scrollIntoView({ behavior: 'smooth' });
    }
    else if (dir === 'l') {
      //accounts for resizing off window with mod offset
      gallery.scrollLeft -= gallery.scrollLeft % moveAmt + moveAmt;
    }
    else if (dir === 'r') {
      gallery.scrollLeft += moveAmt - gallery.scrollLeft % moveAmt;
    }


  }

  checkArrows() {
    let gallery = document.querySelector("div#proj-gallery");
    let bodyWidth = document.documentElement.clientWidth;
    let galleryEnd = (this.images.length - 2) * .5 * bodyWidth;

    if (gallery.scrollLeft < .5 * bodyWidth) { this.showLeft = false; }
    else { this.showLeft = true; }

    if (gallery.scrollLeft >= galleryEnd) {
      this.showRight = false;
    }
    else { this.showRight = true }
  }

  elementVisible(isVis: boolean) {
    return isVis ? 'visible' : 'hidden';
  }



}
