import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";

@Injectable()
export class GetHeroDetailService {
  private headers = new Headers({ 'DAIWAN-API-TOKEN': '434A9-27B9A-2F5AA-9D94F' });
  private getHeroUrl = '/lol-api/GetChampionDetail?champion_id=';  // URL to web api

  constructor(private http: Http) {

  }
  getHeroDetail(id) {
    return this.http.get(this.getHeroUrl + id, { headers: this.headers })
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}