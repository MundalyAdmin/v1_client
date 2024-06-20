import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactInitiativeCreateComponent } from './impact-initiative-create.component';

describe('ImpactInitiativeCreateComponent', () => {
  let component: ImpactInitiativeCreateComponent;
  let fixture: ComponentFixture<ImpactInitiativeCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactInitiativeCreateComponent]
    });
    fixture = TestBed.createComponent(ImpactInitiativeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
