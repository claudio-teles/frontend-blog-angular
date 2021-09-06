import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostviewingComponent } from './postviewing.component';

describe('PostviewingComponent', () => {
  let component: PostviewingComponent;
  let fixture: ComponentFixture<PostviewingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostviewingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostviewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
