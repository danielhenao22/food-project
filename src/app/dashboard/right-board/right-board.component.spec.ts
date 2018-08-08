import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBoardComponent } from './right-board.component';

describe('RightBoardComponent', () => {
  let component: RightBoardComponent;
  let fixture: ComponentFixture<RightBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
