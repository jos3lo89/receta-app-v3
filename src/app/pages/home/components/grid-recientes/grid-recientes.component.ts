import { Component, OnInit } from '@angular/core';
import recientesRecetas from './data-access/recientes';
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonImg, IonCardHeader, IonCardTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-grid-recientes',
  templateUrl: './grid-recientes.component.html',
  styleUrls: ['./grid-recientes.component.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonImg, IonCard, IonCol, IonRow, IonGrid, IonContent, ],
})
export class GridRecientesComponent implements OnInit {
  recientesRecetas = recientesRecetas;

  constructor() {}

  ngOnInit() {}
}
