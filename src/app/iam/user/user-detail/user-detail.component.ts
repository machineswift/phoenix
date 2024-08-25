import {Component} from '@angular/core';
import {NzCardComponent} from "ng-zorro-antd/card";
import {NzDescriptionsComponent, NzDescriptionsItemComponent} from "ng-zorro-antd/descriptions";
import {MatButton} from "@angular/material/button";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    NzCardComponent,
    NzDescriptionsComponent,
    NzDescriptionsItemComponent,
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  user: {
    userId: number;
    userName: string;
    enabled: boolean;
    phone: string;
    fullName: string;
    gender: string;
  } =
    {
      userId: 1,
      userName: '张三',
      enabled: true,
      phone: '12345678901',
      fullName: '上海市浦东新区',
      gender: '男'
    };

  constructor() {
  }
}
