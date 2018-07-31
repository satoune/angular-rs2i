import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDelivredComponent } from './list-delivred.component';

describe('ListDelivredComponent', () => {
  let component: ListDelivredComponent;
  let fixture: ComponentFixture<ListDelivredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDelivredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDelivredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
