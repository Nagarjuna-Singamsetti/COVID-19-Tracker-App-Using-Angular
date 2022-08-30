import { Component, OnInit } from '@angular/core';
import { CovidAPIService } from 'src/app/shared/covid-api.service';

@Component({
  selector: 'app-state-wise',
  templateUrl: './state-wise.component.html',
  styleUrls: ['./state-wise.component.css']
})
export class StateWiseComponent implements OnInit {
  public stateWiseData:any[]=[];
  constructor(private _CovidAPIService: CovidAPIService) { }

  ngOnInit(): void {
    this.getStatesData();
  }
  getStatesData() {
    this._CovidAPIService.getStatesData().subscribe((response:any) => {
      this.stateWiseData = response.statewise ;
    })
  }
}
