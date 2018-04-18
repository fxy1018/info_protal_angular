import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdnaComponent } from './bdna.component';

describe('BdnaComponent', () => {
  let component: BdnaComponent;
  let fixture: ComponentFixture<BdnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
