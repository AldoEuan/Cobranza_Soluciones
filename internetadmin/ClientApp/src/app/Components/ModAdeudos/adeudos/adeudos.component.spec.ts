import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdeudosComponent } from './adeudos.component';

describe('AdeudosComponent', () => {
  let component: AdeudosComponent;
  let fixture: ComponentFixture<AdeudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdeudosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdeudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
