import { Component, inject, OnInit } from '@angular/core';
import dataR from './data-access/regiones';
import { NavigationExtras, Router } from '@angular/router';
import { IonCard, IonCardHeader, IonCardTitle, IonList, IonGrid, IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-grid-regiones',
  templateUrl: './grid-regiones.component.html',
  styleUrls: ['./grid-regiones.component.scss'],
  standalone: true,
  imports: [IonItem, IonGrid, IonList, IonCardTitle, IonCardHeader, IonCard, ],
})
export class GridRegionesComponent implements OnInit {
  private _router = inject(Router);

  regionesData = dataR;

  constructor() {}

  ngOnInit() {}

  redirectCard(ruta: string, region: string) {
    const params: NavigationExtras = {
      queryParams: {
        region,
      },
    };

    this._router.navigate([ruta], params);
  }
}
