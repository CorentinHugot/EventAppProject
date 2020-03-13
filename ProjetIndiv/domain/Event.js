export default class Event {
    constructor(id, name, image, instructions) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.thumbnail = image + "/preview";
    }
  }
  
  