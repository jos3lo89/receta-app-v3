import { Component, effect, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonSpinner,
} from '@ionic/angular/standalone';
import { AuthStoreService } from 'src/app/shared/auth-state/auht-store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    IonSpinner,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export default class ProfilePage implements OnInit {
  userDataSignal = this.auhtStoreService.getUserDataSignal();
  loading = true;
  userDAta: any;

  constructor(private auhtStoreService: AuthStoreService) {
    effect(() => {
      this.userDAta = this.userDataSignal();
      this.loading = false;
    });
  }

  ngOnInit() {}
}
