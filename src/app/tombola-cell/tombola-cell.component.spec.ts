import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TombolaCellComponent } from './tombola-cell.component';

describe('TombolaCellComponent', () => {
  let component: TombolaCellComponent;
  let fixture: ComponentFixture<TombolaCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TombolaCellComponent]
    });
    fixture = TestBed.createComponent(TombolaCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
