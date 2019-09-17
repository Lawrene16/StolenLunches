import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstudyPage } from './viewstudy.page';

describe('ViewstudyPage', () => {
  let component: ViewstudyPage;
  let fixture: ComponentFixture<ViewstudyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstudyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstudyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
