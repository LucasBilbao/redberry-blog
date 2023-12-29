import { Component } from '@angular/core';
import { OperationSuccessBaseComponent } from '../operation-success-base/operation-success-base.component';

@Component({
  selector: 'rb-authorization-success',
  templateUrl:
    '../operation-success-base/operation-success-base.component.html',
  styleUrl: '../operation-success-base/operation-success-base.component.scss',
})
export class AuthorizationSuccessComponent extends OperationSuccessBaseComponent {}
