import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzBreadCrumbComponent, NzBreadCrumbItemComponent} from "ng-zorro-antd/breadcrumb";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {DemoNgZorroAntdModule} from "./ng-zorro-antd.module";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NzBreadCrumbComponent,
    NzBreadCrumbItemComponent,
    NzButtonComponent,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzModalModule,
    RouterLink,
    RouterOutlet,
    DemoNgZorroAntdModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

}
