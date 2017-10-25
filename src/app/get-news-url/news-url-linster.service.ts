import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NewsUrlLinsterService {
  change: EventEmitter<string>;
  constructor() {
    this.change = new EventEmitter();
  }
}
