import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverFrankComponent } from './over-frank.component';

describe('OverFrankComponent', () => {
  let component: OverFrankComponent;
  let fixture: ComponentFixture<OverFrankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverFrankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverFrankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
