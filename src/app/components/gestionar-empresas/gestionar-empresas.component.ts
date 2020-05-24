import { Component, OnInit } from '@angular/core';
import {ProductsEmpService} from '../../services/products-emp.service';
import { ProductEmp } from 'src/app/models/productsEmp';

@Component({
  selector: 'app-gestionar-empresas',
  templateUrl: './gestionar-empresas.component.html',
  styleUrls: ['./gestionar-empresas.component.css']
})
export class GestionarEmpresasComponent implements OnInit {
  productsEmp = [];
  editingProduct:ProductEmp;
  editing: boolean =false;
  constructor(public productService:ProductsEmpService) { }

  ngOnInit(): void {
    console.log(this.productsEmp)
    this.productService.getProductsEmp().subscribe(products =>{
      this.productsEmp = products;
    })
  }
  deleteProduct(event,product){
    this.productService.deleteProductsEmp(product);
  }
  editProduct(event,product){
   this.editingProduct = product;
   this.editing = !this.editing;
  }
  updateProduct(){
     this.productService.updateProductEmp(this.editingProduct);
     this.editingProduct = {} as ProductEmp;
     this.editing = false;
  }
}

