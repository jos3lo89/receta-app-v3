import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonInput,
  IonSelectOption,
  IonSelect,
  IonText,
} from '@ionic/angular/standalone';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { CamaraModalComponent } from './components/camara-modal/camara-modal.component';

@Component({
  selector: 'app-agegar-receta',
  templateUrl: './agegar-receta.page.html',
  styleUrls: ['./agegar-receta.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonInput,
    IonButton,
    IonList,
    IonLabel,
    IonItem,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonSelectOption,
    ReactiveFormsModule,
    IonSelect,
    CamaraModalComponent,
  ],
})
export default class AgegarRecetaPage implements OnInit {
  recipeForm: FormGroup;
  isModalOpen = false;
  capturedImages: string[] = [];

  constructor(private fb: FormBuilder) {
    this.recipeForm = this.fb.group({
      nombre: ['', Validators.required],
      hora: ['', Validators.required],
      minutos: ['', Validators.required],
      ingredientes: this.fb.array([this.fb.control('')]),
      preparacion: this.fb.array([this.fb.control('')]),
      region: ['', Validators.required],
      tipo: ['', Validators.required],
      porciones: [1, Validators.required],
      carbohidratos: ['', Validators.required],
      energia: ['', Validators.required],
      imagenes: this.fb.array([]),
    });
  }
  ngOnInit() {}

  get ingredientes() {
    return this.recipeForm.get('ingredientes') as FormArray;
  }

  get preparacion() {
    return this.recipeForm.get('preparacion') as FormArray;
  }

  get imagenes() {
    return this.recipeForm.get('imagenes') as FormArray;
  }

  async takeImage() {
    const dataURl = (await this.takePicture('Imagen de la receta')).dataUrl;
    console.log(dataURl);
    // luego guardar en el formulario
    /*
    this.form.controls.image.setValue(dataURl)

    */
  }

  /* CAMARA START */

  async takePicture(promptLabelHeader: string) {
    return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      promptLabelHeader,
      promptLabelPhoto: 'Seleciona una imagen',
      promptLabelPicture: 'Toma una foto',
    });
  }
  /* CAMARA END */

  addIngrediente() {
    this.ingredientes.push(this.fb.control(''));
  }

  addPreparacion() {
    this.preparacion.push(this.fb.control(''));
  }

  capturedImage: string | undefined;

  handleCapture(imageDataUrl: string) {
    this.capturedImages.push(imageDataUrl);
    this.imagenes.push(this.fb.control(imageDataUrl));
    this.closeModal();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  onSubmit() {
    if (this.recipeForm.valid) {
      console.log(this.recipeForm.value);
      // Aquí puedes agregar la lógica para subir a Firestore
    } else {
      console.log('Formulario inválido');
    }
  }
}
