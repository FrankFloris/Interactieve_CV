import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesPaginaComponent } from './games-pagina.component';

describe('GamesPaginaComponent', () => {
  let component: GamesPaginaComponent;
  let fixture: ComponentFixture<GamesPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
