import { Injectable } from '@angular/core';
import { PHOTOGROUPS, WORKPANELS, PROJECTPANELS } from './photo-info';
import { PhotoGroup } from './photogroup';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  getPhotos(id: string): PhotoGroup {
    //potential take in text file with info (folder path/pics) and parse 
    console.log(id);
    let pgroup = PHOTOGROUPS.find(group => group.id === id);
    return pgroup;
  }

  getWorkPanels() {
    return WORKPANELS;
  }

  getProjectPanels() {
    return PROJECTPANELS;
  }

  getProjectDetails(id: string) {
    let found = PROJECTPANELS[0].members.find(member => member.id === id);
    return found === null ? null : found.cover;
  }

}
