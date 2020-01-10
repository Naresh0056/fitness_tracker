import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLestComponent } from './sidenav-lest.component';

describe('SidenavLestComponent', () => {
  let component: SidenavLestComponent;
  let fixture: ComponentFixture<SidenavLestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavLestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavLestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
