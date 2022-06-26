import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmFormulaireComponent } from './film-formulaire.component';

describe('FilmFormulaireComponent', () => {
  let component: FilmFormulaireComponent;
  let fixture: ComponentFixture<FilmFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmFormulaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
