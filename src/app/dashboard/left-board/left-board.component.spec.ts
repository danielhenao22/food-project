import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBoardComponent } from './left-board.component';

describe('LeftBoardComponent', () => {
  let component: LeftBoardComponent;
  let fixture: ComponentFixture<LeftBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
