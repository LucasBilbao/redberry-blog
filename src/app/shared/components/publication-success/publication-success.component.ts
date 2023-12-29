import { Component, OnInit } from '@angular/core';
import { OperationSuccessBaseComponent } from '../operation-success-base/operation-success-base.component';

@Component({
  selector: 'rb-publication-success',
  templateUrl:
    '../operation-success-base/operation-success-base.component.html',
  styleUrl: '../operation-success-base/operation-success-base.component.scss',
})
export class PublicationSuccessComponent
  extends OperationSuccessBaseComponent
  implements OnInit
{
  public ngOnInit(): void {
    this.successModalMsg = 'ჩანაწერი წარმატებით დაემატა';
    this.successModalBtnTxt = 'მთავარ გვერდზე დაბრუნება';
  }
}
