import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRedirectionComponent } from './login-redirection.component';

describe('LoginRedirectionComponent', () => {
  let component: LoginRedirectionComponent;
  let fixture: ComponentFixture<LoginRedirectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRedirectionComponent]
    });
    fixture = TestBed.createComponent(LoginRedirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
