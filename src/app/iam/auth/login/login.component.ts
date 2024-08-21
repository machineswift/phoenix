import {firstValueFrom} from "rxjs";
import {Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzCheckboxComponent} from "ng-zorro-antd/checkbox";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  NzFormControlComponent,
  NzFormDirective,
  NzFormItemComponent,
  NzFormLabelComponent,
  NzFormTooltipIcon
} from "ng-zorro-antd/form";


import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    NzFormItemComponent,
    NzFormControlComponent,
    NzInputGroupComponent,
    ReactiveFormsModule,
    NzColDirective,
    NzButtonComponent,
    NzCheckboxComponent,
    NzRowDirective,
    NzInputDirective,
    NzFormDirective,
    NzFormLabelComponent,
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly http = inject(HttpClient);

  //用于存储图片数据或URL
  captchaImgSrc: string = '';

  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    captcha: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.formBuilder.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    captcha: ['', [Validators.required]],
    remember: [true]
  });

  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.captcha();
  }

  captcha() {
    const imageUrl = 'loong-iam-app/auth/captcha';
    this.http.get(imageUrl, {
      responseType: 'blob',
      withCredentials: true,
    }).subscribe(blob => {
      this.captchaImgSrc = URL.createObjectURL(blob);
    });
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

      const productFormData = new FormData();
      productFormData.set('username', formValues.userName + '');
      productFormData.set('password', formValues.password + '');
      productFormData.set('captcha', formValues.captcha + '');
      productFormData.set('rememberMe', formValues.remember + '');
      const response = await firstValueFrom(
        this.http.post('loong-iam-app/auth/login', productFormData, {
          observe: 'response',
          withCredentials: true,
        }),
      );

      console.log(response.status); // 200
      console.log(response.body);   //

      this.router.navigate(['iam/user/user']).then(r => {

        console.log("导航到登录页面");
      });
    }
  }

}
