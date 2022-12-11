import { Regalos } from './../Models/regalos';
import { ServicioService } from './../Services/servicio.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatDialog } from '@angular/material/dialog';
 
@Component({
  selector: 'app-lista-regalos',
  templateUrl: './lista-regalos.component.html',
  styleUrls: ['./lista-regalos.component.css']
})
export class ListaRegalosComponent implements OnInit {
  regaloObj: Regalos = new Regalos();
  regalosArr: Regalos[]=[]
  regaloValue: string= '';
regaloCanValue: number= 0;
regaloURLValue:string='';
  constructor(private service:ServicioService , private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.regaloObj=new Regalos();
    this.regalosArr=[]
    this.getRegalos();
    this.regaloCanValue=1;
  }

getRegalos() {
  this.service.getRegalo().subscribe(res=> {
  this.regalosArr=res;
  })
}

  addRegalo(){
    if (this.regaloValue!='' && this.regaloCanValue!=0 && this.regaloURLValue!='') {
      this.regaloObj.nombre= this.regaloValue;
      this.regaloObj.cantidad= this.regaloCanValue;
      this.regaloObj.img= this.regaloURLValue;
      this.service.addRegalo(this.regaloObj).subscribe(res=>{
        this.ngOnInit();
        this.regaloValue='';
        this.regaloCanValue= 1;
        this.regaloURLValue='';
      })
    } else{
      alert("Recuerde TODOS completar los campos")
    }
   
    }

    deleteRegalo(regalito:Regalos){
this.service.deleteRegalo(regalito).subscribe(res=> {
  this.ngOnInit();
})
    }

    deleteAllRegalos(){
      this.service.deleteAllRegalo().subscribe(res=> {
        this.ngOnInit();
      })
    }



  }

