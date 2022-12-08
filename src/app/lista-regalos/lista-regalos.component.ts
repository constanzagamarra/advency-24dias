import { Regalos } from './../Models/regalos';
import { ServicioService } from './../Services/servicio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-regalos',
  templateUrl: './lista-regalos.component.html',
  styleUrls: ['./lista-regalos.component.css']
})
export class ListaRegalosComponent implements OnInit {
  regaloObj: Regalos = new Regalos();
  regalosArr: Regalos[]=[]

regaloValue: string= '';

  constructor(private service:ServicioService) { }

  ngOnInit(): void {
    this.regaloObj=new Regalos();
    this.regalosArr=[]
    this.getRegalos();
  }

getRegalos() {
  this.service.getRegalo().subscribe(res=> {
  this.regalosArr=res;
  })
}

  addRegalo(){
    this.regaloObj.nombre= this.regaloValue;
    this.service.addRegalo(this.regaloObj).subscribe(res=>{
      this.ngOnInit();
      this.regaloValue='';
    })
    }

    deleteRegalo(regalito:Regalos){
this.service.deleteRegalo(regalito).subscribe(res=> {
  this.ngOnInit();
})
    }
  }

