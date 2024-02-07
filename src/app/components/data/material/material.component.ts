import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {PhoenixHttpClientService} from "../../../services/common/phoenix-http-client.service";

@Component({
  selector: 'data-material',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatGridList,
    MatGridTile,
    MatSlideToggle
  ],
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss'
})
export class MaterialComponent implements OnInit {

  materialUrls: string[]=[];

  ngOnInit() {
    this.getData();
  }

  constructor(private httpClientService: PhoenixHttpClientService) {
  }

  getData() {
    // 使用HttpClient发出GET请求
    this.httpClientService.getData('http://localhost:8901/dragon-data-service/material/temporary/selectPage').subscribe(
      (response: any) => {
        // 请求成功，response包含了服务器返回的数据
        // 假设服务器返回的是一个数组，我们直接将其赋值给dataArray
        this.materialUrls = response;
        console.log(this.materialUrls);
      },
      (error: any) => {
        // 处理错误情况
        console.error('An error occurred:', error);
      }
    );
  }
}
