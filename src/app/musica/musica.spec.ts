import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Musica } from './musica';

describe('Musica', () => {
  let component: Musica;
  let fixture: ComponentFixture<Musica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Musica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Musica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
