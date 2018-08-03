import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { Login } from '../../../interfaces/login';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  public form: FormGroup;
  @Output() nItem: EventEmitter<Login> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      login: ['', Validators.compose([Validators.required, Validators.email])
          ] ,
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])
    ],
    });
  }

  public isError(name: string): boolean {
    const tmp = this.form.get(name);
    console.log(tmp);
    return tmp.invalid && tmp.touched;
  }



}
