import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskbookCallComponent } from './deskbook-call.component';

describe('DeskbookCallComponent', () => {
  let component: DeskbookCallComponent;
  let fixture: ComponentFixture<DeskbookCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskbookCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskbookCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
