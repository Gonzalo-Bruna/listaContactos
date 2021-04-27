import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarContactoComponent } from './adicionar-contacto.component';

describe('AdicionarContactoComponent', () => {
  let component: AdicionarContactoComponent;
  let fixture: ComponentFixture<AdicionarContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
