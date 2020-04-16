import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ImagesService } from '../images.service';
import { Image } from '../photogroup';
import { ActivatedRoute, Router } from '@angular/router';
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
  private imageSub: any;
  //images controls
  showLeft = false;
  showRight = true;
  showUp = false;
  showDown = true;

  constructor(private imagesService: ImagesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setUpPageWithImages();
  }

  ngOnDestroy() {
    this.imageSub.unsubscribe();
  }

  setUpPageWithImages() {
    this.imageSub = this.route.paramMap
      .subscribe(params => {
        if (this.id !== 'portfolio') {
          this.id = params.get("id");
        }
        let photos = this.imagesService.getPhotos(this.id);
        this.details = this.imagesService.getProjectDetails(this.id)
        this.path = photos.path;
        this.images = photos.images;
        this.isProj = this.id.substr(0, 4) === 'proj';
        if (this.isProj) {
          let page = document.querySelector(".gallery.page");
          if (page !== null) { page.scrollTo(0, 0); }
          let gallery = document.querySelector("#proj-gallery");
          if (gallery !== null) { gallery.scrollTo(0, 0); }
        }
      });
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


  rightClick() {
    return false;
  }
}
