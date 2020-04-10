import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidUpdateComponent } from './covid-update.component';

describe('CovidUpdateComponent', () => {
  let component: CovidUpdateComponent;
  let fixture: ComponentFixture<CovidUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
