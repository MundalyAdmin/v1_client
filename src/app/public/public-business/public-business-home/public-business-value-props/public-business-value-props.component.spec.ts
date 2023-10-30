import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBusinessValuePropsComponent } from './public-business-value-props.component';

describe('PublicBusinessValuePropsComponent', () => {
  let component: PublicBusinessValuePropsComponent;
  let fixture: ComponentFixture<PublicBusinessValuePropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBusinessValuePropsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicBusinessValuePropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
