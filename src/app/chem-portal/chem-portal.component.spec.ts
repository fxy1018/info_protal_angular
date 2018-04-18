import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemPortalComponent } from './chem-portal.component';

describe('ChemPortalComponent', () => {
  let component: ChemPortalComponent;
  let fixture: ComponentFixture<ChemPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
