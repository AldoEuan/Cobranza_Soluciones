import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarPlanesComponent } from './modal-eliminar-planes.component';

describe('ModalEliminarPlanesComponent', () => {
  let component: ModalEliminarPlanesComponent;
  let fixture: ComponentFixture<ModalEliminarPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
