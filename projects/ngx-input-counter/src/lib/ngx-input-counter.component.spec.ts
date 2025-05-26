import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInputCounterComponent } from './ngx-input-counter.component';

describe('NgxInputCounterComponent', () => {
  let component: NgxInputCounterComponent;
  let fixture: ComponentFixture<NgxInputCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxInputCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxInputCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have default values', () => {
    expect(component.value).toEqual(0);
    expect(component.step).toBe(1);
    expect(component.min).toBe(-Infinity);
    expect(component.max).toBe(Infinity);
    expect(component.disabled).toBeFalse();
  });

  it('should add 1 to value when click plus button', () => {
    const plusButton = fixture.debugElement.nativeElement.querySelector('.ngx-input-counter-button:last-of-type');
    plusButton.click();
    fixture.detectChanges();
    expect(component.value).toBe(1);
  })
});
