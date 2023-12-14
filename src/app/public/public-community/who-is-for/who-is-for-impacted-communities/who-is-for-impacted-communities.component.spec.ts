import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsForImpactedCommunitiesComponent } from './who-is-for-impacted-communities.component';

describe('WhoIsForImpactedCommunitiesComponent', () => {
  let component: WhoIsForImpactedCommunitiesComponent;
  let fixture: ComponentFixture<WhoIsForImpactedCommunitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoIsForImpactedCommunitiesComponent]
    });
    fixture = TestBed.createComponent(WhoIsForImpactedCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
