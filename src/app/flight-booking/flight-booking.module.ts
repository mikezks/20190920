import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';
import { FlightTypeaheadComponent } from './flight-typeahead/flight-typeahead.component';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
    FlightTypeaheadComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlightBookingRoutingModule
  ],
  exports: [
    /* FlightSearchComponent,
    FlightEditComponent */
  ]
})
export class FlightBookingModule { }
