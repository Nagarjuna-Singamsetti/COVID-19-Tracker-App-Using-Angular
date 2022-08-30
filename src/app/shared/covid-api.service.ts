import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidAPIService {

  stateWiseApi = 'https://data.covid19india.org/data.json';
  districtWiseApi = 'https://data.covid19india.org/state_district_wise.json';

  constructor(private _httpClient: HttpClient) { }

  getStatesData() {
    return this._httpClient.get(this.stateWiseApi);
  }
  getDistrictsData() {
    return this._httpClient.get(this.districtWiseApi);
  }
}
