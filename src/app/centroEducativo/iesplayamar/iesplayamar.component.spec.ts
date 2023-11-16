import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IESPlayamarComponent } from './iesplayamar.component';

describe('IESPlayamarComponent', () => {
  let component: IESPlayamarComponent;
  let fixture: ComponentFixture<IESPlayamarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IESPlayamarComponent]
    });
    fixture = TestBed.createComponent(IESPlayamarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
