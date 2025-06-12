import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Colagem } from './colagem';

describe('Colagem', () => {
  let component: Colagem;
  let fixture: ComponentFixture<Colagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Colagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Colagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
