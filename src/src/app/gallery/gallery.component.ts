import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('regularGallery', { static: true }) regGall: ElementRef;
  path: string;
  images: Image[];
  isProj: boolean;
  details: Image;

  //images controls
  showLeft = false;
  showRight = true;
  showUp = false;
  showDown = true;

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
    // document.body.scrollTop = 0;

    //let photos = this.imagesService.getPhotos(this.id);
    //this.path = photos.path;
    //this.images = photos.images;
  }

  setBackground(isOdd) {
    // console.log("we tried");
    // document.querySelector("div.image").setAttribute("background-color", "#e8d8c3");
    return isOdd ? "#e8d8c3" : "none";
  }

  scroll(dir: string) {
    if (this.isProj) {
      let gallery = document.querySelector("div#proj-gallery");
      let bodyWidth = document.documentElement.clientWidth;
      let moveAmt = bodyWidth > 600 ? .5 * bodyWidth : bodyWidth;

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
    else {
      let regGall = document.querySelector("div.page");
      let offset = regGall.scrollTop % regGall.clientHeight;
      if (dir === 'rd') {
        regGall.scrollTop += regGall.clientHeight - offset;
      }
      else if (dir = "u") {
        regGall.scrollTop -= regGall.clientHeight + offset;
      }

    }



  }

  checkArrows() {
    if (this.isProj) {
      let gallery = document.querySelector("div#proj-gallery");
      let projGalleryEnd = gallery.scrollWidth - gallery.clientWidth;

      this.showLeft = !(gallery.scrollLeft === 0);
      this.showRight = !(gallery.scrollLeft >= projGalleryEnd);
    }
    else {
      let regGall = document.querySelector("div.page");
      let galleryEnd = regGall.scrollHeight - regGall.clientHeight;

      this.showUp = regGall.scrollTop !== 0;
      this.showDown = !(regGall.scrollTop >= galleryEnd);
    }

  }

  elementVisible(isVis: boolean) {
    return isVis ? 'visible' : 'hidden';
  }



}
