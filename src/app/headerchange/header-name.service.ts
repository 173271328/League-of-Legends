import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class HeaderNameService {
  change: EventEmitter<string>;
  constructor() {
    this.change = new EventEmitter();
  }
}
