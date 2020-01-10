import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuurentTrainingComponent } from './cuurent-training.component';

describe('CuurentTrainingComponent', () => {
  let component: CuurentTrainingComponent;
  let fixture: ComponentFixture<CuurentTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuurentTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuurentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
