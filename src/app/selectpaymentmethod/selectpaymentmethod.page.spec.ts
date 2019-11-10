import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectpaymentmethodPage } from './selectpaymentmethod.page';

describe('SelectpaymentmethodPage', () => {
  let component: SelectpaymentmethodPage;
  let fixture: ComponentFixture<SelectpaymentmethodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectpaymentmethodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectpaymentmethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
