import { Component, OnInit } from '@angular/core';
import {NzCellFixedDirective, NzTableComponent} from "ng-zorro-antd/table";
import {NgForOf} from "@angular/common";

interface ItemData {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-aaaa',
  standalone: true,
  imports: [
    NzTableComponent,
    NgForOf,
    NzCellFixedDirective
  ],
  templateUrl: './aaaa.component.html'
})
export class AaaaComponent implements OnInit {
  listOfData: ItemData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London`
      });
    }
  }
}
