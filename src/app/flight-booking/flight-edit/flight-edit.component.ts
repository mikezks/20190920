import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateCity, validateCityWithParam } from '../../shared/validation/validate-city';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  editForm: FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        params => this.id = +params.get('id')
      );

    this.editForm = this.fb.group({
      id: [1],
      from: [
        'Graz',
        [ validateCity, Validators.required, Validators.minLength(3) ]
      ],
      to: [
        'Hamburg',
        validateCityWithParam([
          'Wien',
          'Berlin',
          'London'
        ])
      ],
      date: [(new Date()).toISOString()]
    });

    this.editForm.controls.to.valueChanges
      .subscribe(console.log)
  }

  save(): void {
    console.log(this.editForm.value);
    console.log(this.editForm.controls.from.value);
  }


}
