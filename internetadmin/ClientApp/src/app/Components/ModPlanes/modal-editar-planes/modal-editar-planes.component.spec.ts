import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarPlanesComponent } from './modal-editar-planes.component';

describe('ModalEditarPlanesComponent', () => {
  let component: ModalEditarPlanesComponent;
  let fixture: ComponentFixture<ModalEditarPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
