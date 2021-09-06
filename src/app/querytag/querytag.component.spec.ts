import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerytagComponent } from './querytag.component';

describe('QuerytagComponent', () => {
  let component: QuerytagComponent;
  let fixture: ComponentFixture<QuerytagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerytagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerytagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
