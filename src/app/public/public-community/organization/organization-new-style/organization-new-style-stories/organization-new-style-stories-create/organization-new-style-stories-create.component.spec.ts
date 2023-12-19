import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationNewStyleStoriesCreateComponent } from './stories-create.component';

describe('OrganizationNewStyleStoriesCreateComponent', () => {
  let component: OrganizationNewStyleStoriesCreateComponent;
  let fixture: ComponentFixture<OrganizationNewStyleStoriesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationNewStyleStoriesCreateComponent],
    });
    fixture = TestBed.createComponent(
      OrganizationNewStyleStoriesCreateComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
