import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormEmpComponent } from './product-form-emp.component';

describe('ProductFormEmpComponent', () => {
  let component: ProductFormEmpComponent;
  let fixture: ComponentFixture<ProductFormEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
