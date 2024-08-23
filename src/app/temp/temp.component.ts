import { Component } from '@angular/core';
import {NzModalComponent, NzModalContentDirective} from "ng-zorro-antd/modal";
import {NzButtonComponent} from "ng-zorro-antd/button";

@Component({
  selector: 'nz-demo-modal-basic',
  standalone: true,
  imports: [
    NzModalComponent,
    NzButtonComponent,
    NzModalContentDirective
  ],
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent {


  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
