import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XuathangComponent } from './xuathang.component';

describe('XuathangComponent', () => {
  let component: XuathangComponent;
  let fixture: ComponentFixture<XuathangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XuathangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XuathangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
