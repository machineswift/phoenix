import {Component} from '@angular/core';
import {NzMenuItemComponent} from "ng-zorro-antd/menu";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {UserUpdate} from "../user.model";
import {NzCardComponent} from "ng-zorro-antd/card";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [
    NzMenuItemComponent,
    RouterLink,
    FormsModule,
    NzCardComponent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.scss'
})
export class UserUpdateComponent {


  user: UserUpdate = {
    userId: "3233434",
    userName: 'machine',
    enabled: false,
    phone: "1838392839",
    fullName: '陈',
    gender: "男"
  };


  onSave(user: UserUpdate): void {
    console.log('User saved:', user);
  }

}
