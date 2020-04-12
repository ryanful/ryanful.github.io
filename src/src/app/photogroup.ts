export class PhotoGroup {
  //assuming all photos are in same directory
  id: string; //identifier- portfolio, abgrad, etc
  title: string;
  path: string;
  images: Image[];
}

export class Image {
  name: string;
  date: string;
  title: string;
  desc: string;
  models: string[];
}