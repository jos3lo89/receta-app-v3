import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton } from '@ionic/angular/standalone';
import { AuthStateService } from 'src/app/shared/auth-state/auth-state.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss'],
  imports: [IonButton],
  standalone: true,
})
export class LogOutComponent implements OnInit {
  private _authStateService = inject(AuthStateService);
  private _router = inject(Router);

  constructor() {}

  ngOnInit() {}

  logOut() {
    this._authStateService.logOut();
    this._router.navigateByUrl('/pages/home');
  }
}
