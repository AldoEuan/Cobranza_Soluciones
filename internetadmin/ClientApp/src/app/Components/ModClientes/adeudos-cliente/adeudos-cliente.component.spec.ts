import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdeudosClienteComponent } from './adeudos-cliente.component';

describe('AdeudosClienteComponent', () => {
  let component: AdeudosClienteComponent;
  let fixture: ComponentFixture<AdeudosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdeudosClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdeudosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
