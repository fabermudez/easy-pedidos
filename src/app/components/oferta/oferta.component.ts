import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ofertasService} from '../../services/ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
})
export class OfertaComponent {
  
  oferta:any={};

  constructor(private activatedRoute:ActivatedRoute,
    private _ofertaService:ofertasService) 
  { 
    this.activatedRoute.params.subscribe(params=>{
      this.oferta = this._ofertaService.getOferta(params['id']);
      console.log(this.oferta);
    });
  }

}
