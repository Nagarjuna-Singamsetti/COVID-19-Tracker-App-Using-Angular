import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateWiseComponent } from './components/state-wise/state-wise.component';
import { DistrictWiseComponent } from './components/district-wise/district-wise.component';

@NgModule({
  declarations: [
    AppComponent,
    StateWiseComponent,
    DistrictWiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
