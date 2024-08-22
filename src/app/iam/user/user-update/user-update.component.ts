import {Component} from '@angular/core';
import {NzMenuItemComponent} from "ng-zorro-antd/menu";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {UserUpdate} from "../user.model";

@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [
    NzMenuItemComponent,
    RouterLink,
    FormsModule
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
