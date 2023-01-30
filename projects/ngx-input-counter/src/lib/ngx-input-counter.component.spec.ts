import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInputCounterComponent } from './ngx-input-counter.component';

describe('NgxInputCounterComponent', () => {
  let component: NgxInputCounterComponent;
  let fixture: ComponentFixture<NgxInputCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxInputCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxInputCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
