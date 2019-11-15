import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from './flight-card/flight-card.component';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
