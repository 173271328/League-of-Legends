import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class GetGamerService {
  private headers = new Headers({ 'DAIWAN-API-TOKEN': '434A9-27B9A-2F5AA-9D94F' });
  private getHeroesUrl = 'http://lolapi.games-cube.com/UserArea?keyword=';  // URL to web api

  constructor(private http: Http) {

  }
  getHeroes(searchHero) {
    return this.http.get(this.getHeroesUrl + searchHero, { headers: this.headers })
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
