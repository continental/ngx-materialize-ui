import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmModalTextValidationComponent } from './confirm-modal-text-validation.component';
import { ConfirmModalService } from './confirm-modal.service';

describe('ConfirmModalTextValidationComponent', () => {
  let component: ConfirmModalTextValidationComponent;
  let fixture: ComponentFixture<ConfirmModalTextValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmModalTextValidationComponent ],
      providers: [ ConfirmModalService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmModalTextValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
