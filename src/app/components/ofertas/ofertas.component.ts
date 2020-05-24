import { Component, OnInit } from '@angular/core';
import {ofertasService,Oferta} from '../../services/ofertas.service';
import {ProductsService} from '../../services/products.service';
import { Product } from 'src/app/models/products'; 

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {
  products = [];
  editingProduct:Product;
  editing: boolean =false;
  ofertas:Oferta[]=[];
  constructor(private _ofertasService:ofertasService,public productService:ProductsService) { }

  ngOnInit()
  {
    this.ofertas = this._ofertasService.getOfertas();
    console.log(this.ofertas );
    ////
    this.productService.getProducts().subscribe(products =>{
      console.log(products);
      this.products = products;
    })
  }

}
