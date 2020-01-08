import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosttalkComponent } from './posttalk.component';

describe('PosttalkComponent', () => {
  let component: PosttalkComponent;
  let fixture: ComponentFixture<PosttalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosttalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosttalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
