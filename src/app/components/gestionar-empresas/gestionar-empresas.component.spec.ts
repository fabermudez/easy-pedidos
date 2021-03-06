import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarEmpresasComponent } from './gestionar-empresas.component';

describe('GestionarEmpresasComponent', () => {
  let component: GestionarEmpresasComponent;
  let fixture: ComponentFixture<GestionarEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
