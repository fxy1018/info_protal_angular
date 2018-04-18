import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioPortalComponent } from './bio-portal.component';

describe('BioPortalComponent', () => {
  let component: BioPortalComponent;
  let fixture: ComponentFixture<BioPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
