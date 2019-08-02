import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvPaginaComponent } from './cv-pagina.component';

describe('CvPaginaComponent', () => {
  let component: CvPaginaComponent;
  let fixture: ComponentFixture<CvPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
