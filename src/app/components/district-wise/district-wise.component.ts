import { Component, OnInit } from '@angular/core';
import { CovidAPIService } from 'src/app/shared/covid-api.service';

@Component({
  selector: 'app-district-wise',
  templateUrl: './district-wise.component.html',
  styleUrls: ['./district-wise.component.css']
})
export class DistrictWiseComponent implements OnInit {
  public DistrictWiseData: any[] = [];
  constructor(private _CovidAPIService: CovidAPIService) { }

  ngOnInit(): void {
    this.getDistrictsData();
  }

  getDistrictsData() {
    this._CovidAPIService.getDistrictsData().subscribe((response: any) => {
      this.DistrictWiseData = response;
    })
  }
}
