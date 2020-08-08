import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortCriteriaListComponent } from './sort-criteria-list.component';

describe('SortCriteriaListComponent', () => {
  let component: SortCriteriaListComponent;
  let fixture: ComponentFixture<SortCriteriaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortCriteriaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortCriteriaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
