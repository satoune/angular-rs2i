import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../interfaces/item';
import { State } from '../../enums/state.enum';
import { DateService } from '../../../core/services/date.service';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  public form: FormGroup;
  public states = Object.values(State);
  @Output() nItem: EventEmitter<Item> = new EventEmitter();

  constructor(private fb: FormBuilder, private dateService: DateService) { }

  ngOnInit() {
    this.createForm();
  }


  private createForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])
          ] ,
      reference: ['', Validators.compose([Validators.required, Validators.minLength(4)])
    ],
      state: State.ALIVRER,
      delivryDate: ''
    });
  }

  public process() {
    console.log(this.form.value);
    this.form.get('delivryDate').setValue(this.dateService.dateToIso( this.form.get('delivryDate').value));
    this.nItem.emit(this.form.value);
    this.form.reset();
  }

  public isError(name: string): boolean {
    const tmp = this.form.get(name);
    console.log(tmp);
    return tmp.invalid && tmp.touched;
  }

}
