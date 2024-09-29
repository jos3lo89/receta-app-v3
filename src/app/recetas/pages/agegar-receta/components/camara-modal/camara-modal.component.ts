import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonContent,
  IonIcon,
  IonButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close, camera, image } from 'ionicons/icons';

@Component({
  selector: 'app-camara-modal',
  templateUrl: './camara-modal.component.html',
  styleUrls: ['./camara-modal.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonIcon,
    IonContent,
    IonTitle,
    IonButtons,
    IonToolbar,
    IonHeader,
    IonModal,
  ],
})
export class CamaraModalComponent implements OnInit {
  ngOnInit(): void {}

  constructor() {
    addIcons({ close, camera , image});
  }

  @Input() isOpen = false;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() captureEvent = new EventEmitter<string>();

  photoDataUrl: string | undefined;
  CameraSource = CameraSource;

  closeModal() {
    this.closeModalEvent.emit();
  }

  async takePicture(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: source,
      });
      this.photoDataUrl = image.dataUrl;
      this.captureEvent.emit(image.dataUrl);
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }
}
