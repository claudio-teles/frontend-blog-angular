import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtytleComponent } from './searchtytle.component';

describe('SearchtytleComponent', () => {
  let component: SearchtytleComponent;
  let fixture: ComponentFixture<SearchtytleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchtytleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtytleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
