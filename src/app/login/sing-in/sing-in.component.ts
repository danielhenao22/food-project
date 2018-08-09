import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      namesCtrl: ['', Validators.required],
      lastnamesCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      addressCtrl: ['', Validators.required],
      referencesCtrl: ['', Validators.required],
      addressNameCtrl: ['', Validators.required]
    });
  }

}
