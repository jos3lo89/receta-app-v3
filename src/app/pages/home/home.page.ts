import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent, IonItem, IonText } from '@ionic/angular/standalone';
import { GridRegionesComponent } from './components/grid-regiones/grid-regiones.component';
import { GridTopPeruComponent } from "./components/grid-top-peru/grid-top-peru.component";
import { GridRecientesComponent } from "./components/grid-recientes/grid-recientes.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonText, IonItem,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    GridRegionesComponent, GridTopPeruComponent, GridRecientesComponent],
})
export default class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
