import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptCallComponent } from './accept-call.component';

describe('AcceptCallComponent', () => {
  let component: AcceptCallComponent;
  let fixture: ComponentFixture<AcceptCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
