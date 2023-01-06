import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFrameworksComponent } from './home-frameworks.component';

describe('HomeFrameworksComponent', () => {
  let component: HomeFrameworksComponent;
  let fixture: ComponentFixture<HomeFrameworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFrameworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
