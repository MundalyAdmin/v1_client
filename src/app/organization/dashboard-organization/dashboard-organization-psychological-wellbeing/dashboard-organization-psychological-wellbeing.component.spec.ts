import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationPsychologicalWellbeingComponent } from './dashboard-organization-psychological-wellbeing.component';

describe('DashboardOrganizationPsychologicalWellbeingComponent', () => {
  let component: DashboardOrganizationPsychologicalWellbeingComponent;
  let fixture: ComponentFixture<DashboardOrganizationPsychologicalWellbeingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationPsychologicalWellbeingComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationPsychologicalWellbeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
