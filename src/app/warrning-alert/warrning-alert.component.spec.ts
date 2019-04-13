import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrningAlertComponent } from './warrning-alert.component';

describe('WarrningAlertComponent', () => {
  let component: WarrningAlertComponent;
  let fixture: ComponentFixture<WarrningAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrningAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrningAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
