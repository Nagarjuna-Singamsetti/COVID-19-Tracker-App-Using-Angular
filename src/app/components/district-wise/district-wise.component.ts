import { Component, OnInit } from '@angular/core';
import { CovidAPIService } from 'src/app/shared/covid-api.service';

@Component({
  selector: 'app-district-wise',
  templateUrl: './district-wise.component.html',
  styleUrls: ['./district-wise.component.css']
})
export class DistrictWiseComponent implements OnInit {

  public allData: any[] = [];
  public ListOfStates: string[] = [];
  public ListOfDistricts: string[] = [];
  public selectedState: any;
  public selectedDistrict: any;
  public selectedDistrictData: any;

  constructor(private _CovidAPIService: CovidAPIService) { }

  ngOnInit(): void {
    this.getDistrictsData();
  }
  selectionChange(event: any) {
    this.selectedState = event.value;
    this.ListOfDistricts = Object.keys(this.allData[this.selectedState]['districtData']);
  }
  getDisData(event: any) {
    this.selectedDistrict = event.value;
    this.selectedDistrictData = this.allData[this.selectedState]['districtData'][this.selectedDistrict]
  }
  getDistrictsData() {
    this._CovidAPIService.getDistrictsData().subscribe((response: any) => {
      if (response) {
        this.allData = response;
        this.ListOfStates = Object.keys(this.allData)
      }
    })
  }
}
