import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegePaginaComponent } from './lege-pagina.component';

describe('LegePaginaComponent', () => {
  let component: LegePaginaComponent;
  let fixture: ComponentFixture<LegePaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegePaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegePaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
