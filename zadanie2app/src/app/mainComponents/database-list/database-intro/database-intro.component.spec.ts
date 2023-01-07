import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseIntroComponent } from './database-intro.component';

describe('DatabaseIntroComponent', () => {
  let component: DatabaseIntroComponent;
  let fixture: ComponentFixture<DatabaseIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
