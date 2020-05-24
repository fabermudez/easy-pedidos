import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {ProductEmp} from 'src/app/models/productsEmp';
import { Product } from 'src/app/models/products';
import {GestionarOfertaComponent} from '../gestionar-oferta/gestionar-oferta.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product  = {} as Product;



  constructor( public productsService:ProductsService) { }

  ngOnInit(): void {
  }

addProducts(){
  console.log(this.product)
  if(this.product.Nombre !==''&& this.product.Fecha_publicacion !==''&& this.product.Empresa 
  !==''&& this.product.Descripcion)
  {
    this.productsService.addProducts(this.product)
    this.product = {} as Product;
  }
}


}


