import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { FonctionnaireComponent } from './fonctionnaire/fonctionnaire.component';
import { InfoUserComponent } from './user/info-user/info-user.component';
import { InfofonctionnaireComponent } from './fonctionnaire/infofonctionnaire/infofonctionnaire.component';
import { InfofournisseurComponent } from './fournisseur/infofournisseur/infofournisseur.component';
import { MaterialComponent } from './material/material.component';
import { InfomaterialComponent } from './material/infomaterial/infomaterial.component';
import { ContraComponent } from './contra/contra.component';
import { InfocontraComponent } from './contra/infocontra/infocontra.component';
import { PanneComponent } from './panne/panne.component';
import { InfopanneComponent } from './panne/infopanne/infopanne.component';
import { LoginComponent } from './login/login.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ImaterialComponent } from './material/imaterial/imaterial.component';
import { HttpModule } from '@angular/http';
import { EtudeComponent } from './etude/etude.component';




const appRoutes:Routes =[
  {path:'User',component:UserComponent},
  {path:'Fournisseur',component:FournisseurComponent},
  {path:'Fonctionnaire',component:FonctionnaireComponent},
  {path:'InfoUserComponent',component:InfoUserComponent},
  {path:'InfofonctionnaireComponent',component:InfofonctionnaireComponent},
  {path:'InfofournisseurComponent',component:InfofournisseurComponent},
  {path:'MaterialComponent',component:MaterialComponent},
  {path:'InfomaterialComponent',component:InfomaterialComponent},
  {path:'ContraComponent',component:ContraComponent},
  {path:'InfocontraComponent',component:InfocontraComponent},
  {path:'PanneComponent',component:PanneComponent},
  {path:'InfopanneComponent',component:InfopanneComponent},
  {path:'LoginComponent',component:LoginComponent},
  {path:'RechercheComponent',component:RechercheComponent},
  {path:'ImaterialComponent',component:ImaterialComponent},
  {path:'',redirectTo:'LoginComponent',pathMatch:'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FournisseurComponent,
    FonctionnaireComponent,
    InfoUserComponent,
    InfofonctionnaireComponent,
    InfofournisseurComponent,
    MaterialComponent,
    InfomaterialComponent,
    ContraComponent,
    InfocontraComponent,
    PanneComponent,
    InfopanneComponent,
    LoginComponent,
    RechercheComponent,
    ImaterialComponent,
    EtudeComponent,

 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
