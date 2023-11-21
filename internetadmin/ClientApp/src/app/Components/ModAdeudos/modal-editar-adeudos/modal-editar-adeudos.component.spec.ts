import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarAdeudosComponent } from './modal-editar-adeudos.component';

describe('ModalEditarAdeudosComponent', () => {
  let component: ModalEditarAdeudosComponent;
  let fixture: ComponentFixture<ModalEditarAdeudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarAdeudosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarAdeudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
