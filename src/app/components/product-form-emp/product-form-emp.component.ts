import { Component, OnInit } from '@angular/core';
// import { ProductsService } from '../../services/products.service';
import { ProductsEmpService} from '../../services/products-emp.service';
import {ProductEmp} from 'src/app/models/productsEmp';

@Component({
  selector: 'app-product-form-emp',
  templateUrl: './product-form-emp.component.html',
  styleUrls: ['./product-form-emp.component.css']
})
export class ProductFormEmpComponent implements OnInit {
  productEmp = {} as ProductEmp;
  constructor( public productsService:ProductsEmpService) {
    // this.productsService.getProductsEmp();
   }

  ngOnInit(): void {
    this.productsService.getProductsEmp();
  }
  addProductsEmp(){
    console.log(this.productEmp)
    if(this.productEmp.Nombre !=='' && this.productEmp.Fecha_publicacion !=='' && this.productEmp.Empresa 
    !=='' && this.productEmp.Descripcion)
    {
        this.productsService.addProductsEmp(this.productEmp)
      this.productEmp = {} as ProductEmp;  
    }
}
}
