import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarCobrosComponent } from './modal-editar-cobros.component';

describe('ModalEditarCobrosComponent', () => {
  let component: ModalEditarCobrosComponent;
  let fixture: ComponentFixture<ModalEditarCobrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarCobrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarCobrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
