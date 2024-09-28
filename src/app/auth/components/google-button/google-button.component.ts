import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.scss'],
  standalone: true,
  imports: [IonButton],
})
export class GoogleButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}


  @Output() clickeame = new EventEmitter<void>();

  onClick() {
    this.clickeame.emit();
  }
}
