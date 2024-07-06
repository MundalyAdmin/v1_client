import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactVerificationListComponent } from './impact-verification-list.component';

describe('ImpactVerificationListComponent', () => {
  let component: ImpactVerificationListComponent;
  let fixture: ComponentFixture<ImpactVerificationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactVerificationListComponent]
    });
    fixture = TestBed.createComponent(ImpactVerificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
