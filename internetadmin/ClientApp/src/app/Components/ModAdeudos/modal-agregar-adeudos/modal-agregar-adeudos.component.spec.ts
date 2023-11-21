import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarAdeudosComponent } from './modal-agregar-adeudos.component';

describe('ModalAgregarAdeudosComponent', () => {
  let component: ModalAgregarAdeudosComponent;
  let fixture: ComponentFixture<ModalAgregarAdeudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarAdeudosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAgregarAdeudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
