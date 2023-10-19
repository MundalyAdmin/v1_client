import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBusinessImpactFidelityComponent } from './public-business-impact-fidelity.component';

describe('PublicBusinessImpactFidelityComponent', () => {
  let component: PublicBusinessImpactFidelityComponent;
  let fixture: ComponentFixture<PublicBusinessImpactFidelityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBusinessImpactFidelityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicBusinessImpactFidelityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
