import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeChatAppComponent } from './realtime-chat-app.component';

describe('RealtimeChatAppComponent', () => {
  let component: RealtimeChatAppComponent;
  let fixture: ComponentFixture<RealtimeChatAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealtimeChatAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeChatAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
