import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentresumeComponent } from './contentresume.component';

describe('ContentresumeComponent', () => {
  let component: ContentresumeComponent;
  let fixture: ComponentFixture<ContentresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentresumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
