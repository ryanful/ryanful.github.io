import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import { Panel } from '../photo-info';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  panels: Panel[]; //id's of panels to be displayed

  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.panels = this.imagesService.getProjectPanels();
    console.log("HEY", this.panels[0].id);
  }

}
