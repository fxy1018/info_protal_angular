import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwasComponent } from './gwas.component';

describe('GwasComponent', () => {
  let component: GwasComponent;
  let fixture: ComponentFixture<GwasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
