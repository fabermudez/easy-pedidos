import { Component, OnInit } from '@angular/core';
import {empresasService,Empresa} from '../../services/empresas.service';
import {ProductsEmpService} from '../../services/products-emp.service';
import { ProductEmp } from 'src/app/models/productsEmp';
 

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  productsEmp = [];
  editingProduct:ProductEmp;
  editing: boolean =false;
  empresas:Empresa[]=[]; 
  constructor(private _empresasService:empresasService,public productService:ProductsEmpService) { }

  ngOnInit() {
    this.empresas = this._empresasService.getEmpresas();
    console.log(this.productsEmp)
    this.productService.getProductsEmp().subscribe(products =>{
      this.productsEmp = products;
    })
    
  }

}

