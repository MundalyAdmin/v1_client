import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesContainerComponent } from './companies-container.component';

describe('CompaniesContainerComponent', () => {
  let component: CompaniesContainerComponent;
  let fixture: ComponentFixture<CompaniesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompaniesContainerComponent]
    });
    fixture = TestBed.createComponent(CompaniesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
