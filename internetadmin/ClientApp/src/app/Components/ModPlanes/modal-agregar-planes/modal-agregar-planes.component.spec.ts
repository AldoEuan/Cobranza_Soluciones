import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarPlanesComponent } from './modal-agregar-planes.component';

describe('ModalAgregarPlanesComponent', () => {
  let component: ModalAgregarPlanesComponent;
  let fixture: ComponentFixture<ModalAgregarPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAgregarPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
