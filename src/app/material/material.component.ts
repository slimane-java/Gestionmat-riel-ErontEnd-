import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { error } from '@angular/compiler/src/util';
import { Matriel } from 'src/model/model.material';



@Injectable()
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {


  page:any;
  matriel:Matriel=new Matriel();
  nom:string;

  constructor(private http: Http) {

   

   }

  ngOnInit() {
/*
    this.http.get("http://localhost:8080/m")
    .map(respo=>respo.json())
    .subscribe(
      data=>{
        this.page=data;
      },err=>{
        console.log(err);
        console.log("ok");
      }
      
   )
   */

}


save(){
  this.http.post("http://localhost:8080/AddMaterial",this.matriel)
  .map(respo=>respo.json())
  .subscribe(
    data=>{
      this.page=data;
    },err=>{
      console.log(err);
      console.log("ok");
    }
    
 )
}
    
  }

  
   
      
