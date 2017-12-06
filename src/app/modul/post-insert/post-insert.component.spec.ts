import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInsertComponent } from './post-insert.component';

describe('PostInsertComponent', () => {
  let component: PostInsertComponent;
  let fixture: ComponentFixture<PostInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
