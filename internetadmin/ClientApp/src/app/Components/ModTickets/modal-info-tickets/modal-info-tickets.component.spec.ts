import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoTicketsComponent } from './modal-info-tickets.component';

describe('ModalInfoTicketsComponent', () => {
  let component: ModalInfoTicketsComponent;
  let fixture: ComponentFixture<ModalInfoTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInfoTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInfoTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
