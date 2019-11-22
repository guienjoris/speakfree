import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostValideComponent } from './admin-post-valide.component';

describe('AdminPostValideComponent', () => {
  let component: AdminPostValideComponent;
  let fixture: ComponentFixture<AdminPostValideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostValideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
