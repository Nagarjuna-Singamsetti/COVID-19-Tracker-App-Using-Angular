import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DistrictWiseComponent } from './components/district-wise/district-wise.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'COVID-19_Tracker_App';

  constructor(public dialog: MatDialog) { }


  OpenDistrictComponent() {
    this.dialog.open(DistrictWiseComponent, {
      height: '70%',
      width: '70%'
    });
  }
}