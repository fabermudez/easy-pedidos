import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import { Product } from 'src/app/models/products'; 

 

@Component({
  selector: 'app-gestionar-oferta',
  templateUrl: './gestionar-oferta.component.html',
  styleUrls: ['./gestionar-oferta.component.css']
})
export class GestionarOfertaComponent implements OnInit {
  products = [];
  editingProduct:Product;
  editing: boolean =false;
  constructor(public productService:ProductsService) { }

  ngOnInit()  {
    this.productService.getProducts().subscribe(products =>{
      console.log(products);
      this.products = products;
    })
  }
  deleteProduct(event,product){
    this.productService.deleteProducts(product);
  }
  editProduct(event,product){
   this.editingProduct = product;
   this.editing = !this.editing;
  }
  updateProduct(){
     this.productService.updateProduct(this.editingProduct);
     this.editingProduct = {} as Product;
     this.editing = false;
  }

}
