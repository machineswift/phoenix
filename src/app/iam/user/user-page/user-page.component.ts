import {HttpClient} from '@angular/common/http';
import {Component, inject, OnInit} from '@angular/core';
import {firstValueFrom} from 'rxjs';

import {NzCellFixedDirective, NzTableComponent, NzThAddOnComponent} from 'ng-zorro-antd/table';
import {NgForOf} from "@angular/common";
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzFormDirective, NzFormLabelComponent} from "ng-zorro-antd/form";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";


interface PagedResult<T> {
  current: number;
  size: number;
  total: number;
  records: T[];
}

interface LoongUser {
  userName: string;
  phone: string;
  fullName: string;
}

@Component({
  selector: 'nz-demo-table-ajax',
  templateUrl: './user-page.component.html',
  standalone: true,
  imports: [
    NzTableComponent,
    NzThAddOnComponent,
    NgForOf,
    ReactiveFormsModule,
    NzRowDirective,
    NzColDirective,
    NzFormDirective,
    NzFormLabelComponent,
    NzInputDirective,
    NzButtonComponent,
    NzIconDirective,
    NzCellFixedDirective
  ],
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly http = inject(HttpClient);

  total = 1;
  userList: LoongUser[] = [];
  loading = true;
  pageSize = 20;
  pageIndex = 1;

  validateForm: FormGroup<{
    userName: FormControl<string>;
    phone: FormControl<string>;
    fullName: FormControl<string>;
    gender: FormControl<string>;
    status: FormControl<boolean>;
  }> = this.formBuilder.group({
    userName: ['', [Validators.maxLength(32)]],
    phone: ['', [Validators.maxLength(16)]],
    fullName: ['', [Validators.maxLength(64)]],
    gender: ['', [Validators.maxLength(8)]],
    status: [true]
  });


  constructor() {
  }


  resetForm(): void {
    this.validateForm.reset();
  }

  ngOnInit(): void {
    this.submitForm();
  }


  async submitForm(): Promise<void> {
    if (!this.validateForm.valid) {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    } else {
      console.log('submit', this.validateForm.value);
      let formValues = this.validateForm.value;

      const response = await firstValueFrom(
        this.http.post('http://localhost:8080/loong-iam-app/user/page',
          {
            userName: formValues.userName,
            phone: formValues.phone,
            fullName: formValues.fullName,
            gender: formValues.gender,
            status: formValues.status
          },
          {
            observe: 'response',
            withCredentials: true,
          }),
      );
      console.log(response.body);

      this.loading = false;
      const pagedData: PagedResult<LoongUser> = JSON.parse(JSON.stringify(response.body));
      this.total = pagedData.total;
      this.userList = pagedData.records;
      this.pageSize = pagedData.size;
      this.pageIndex = pagedData.current;
    }
  }
}
