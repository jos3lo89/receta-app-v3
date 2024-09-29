import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonGrid, IonCardHeader, IonCardTitle, IonCard } from "@ionic/angular/standalone";
import top10 from "./data-access/top10Peru"


@Component({
  selector: 'app-grid-top-peru',
  templateUrl: './grid-top-peru.component.html',
  styleUrls: ['./grid-top-peru.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardTitle, IonCardHeader, IonGrid, IonItem, IonList, ]
})
export class GridTopPeruComponent  implements OnInit {

  top10data = top10

  constructor() { }

  ngOnInit() {}

}
