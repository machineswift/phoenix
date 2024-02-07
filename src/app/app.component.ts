import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MaterialComponent} from "./components/data/material/material.component";
import {PhoenixHttpClientService} from "./services/common/phoenix-http-client.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: //模块
    [
      RouterOutlet,
      HttpClientModule,
      MaterialComponent
    ],
  providers: //服务
    [
      PhoenixHttpClientService
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'phoenix';
}
