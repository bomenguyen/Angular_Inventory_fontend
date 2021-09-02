import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemkeComponent } from './kiemke.component';

describe('KiemkeComponent', () => {
  let component: KiemkeComponent;
  let fixture: ComponentFixture<KiemkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiemkeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KiemkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
