import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellularExpressionComponent } from './cellular-expression.component';

describe('CellularExpressionComponent', () => {
  let component: CellularExpressionComponent;
  let fixture: ComponentFixture<CellularExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellularExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellularExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
