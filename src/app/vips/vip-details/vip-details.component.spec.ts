import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipDetailsComponent } from './vip-details.component';

describe('VipDetailsComponent', () => {
  let component: VipDetailsComponent;
  let fixture: ComponentFixture<VipDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
