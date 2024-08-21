import {Component, inject, OnInit} from '@angular/core';
import {NzTableComponent, NzTdAddOnComponent} from "ng-zorro-antd/table";
import {NgForOf, NgIf} from "@angular/common";
import {filter, firstValueFrom, map, Observable} from "rxjs";
import {
  HttpClient,
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";


export interface TreeNodeInterface {
  id: string;
  name: string;
  description?: string;
  level?: number;
  expand?: boolean;
  children?: TreeNodeInterface[];
  parent?: TreeNodeInterface;
}


@Component({
  selector: 'app-department',
  standalone: true,
  imports: [
    NzTableComponent,
    NzTdAddOnComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent implements OnInit {

  private readonly httpClient = inject(HttpClient);

  // objects = await firstValueFrom(
  //   this.httpClient.get<Object[]>('https://192.168.1.152:44300/products', {
  //     withCredentials: true,
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //     params: {
  //       key1: 'value1',
  //       key2: 'value2',
  //     },
  //     observe: 'response',
  //   })
  // );




  myInterceptorFn: HttpInterceptorFn = (request, next) => {
    request = request.clone();// modify request

    const response$ = next(request).pipe(
      filter((httpEvent): httpEvent is HttpResponse<unknown> => httpEvent.type === HttpEventType.Response),
      map(response => {
        response = response.clone(); // modify response
        return response;
      })
    );

    return response$;
  };


  //  bearerTokenInterceptorFn: HttpInterceptorFn = (request, next) => {
  //   const authen = inject(Authentication); // inject Authentication Service
  //
  //   if (authen.loggedIn) {
  //     // 添加 Bearer Token Header
  //     const headers = request.headers.append('Authorization', `Bearer ${authen.bearerToken}`);
  //     request = request.clone({
  //       headers,
  //     });
  //   }
  //   return next(request); // process request
  // };



  listOfMapData: TreeNodeInterface[] = [
    {
      id: `1`,
      name: 'John Brown sr.',
      description: '12',
      children: [
        {
          id: `1-1`,
          name: 'John Brown',
          description: '42'
        },
        {
          id: `1-2`,
          name: 'John Brown jr.',
          description: '30',
          children: [
            {
              id: `1-2-1`,
              name: 'Jimmy Brown',
              description: '16'
            }
          ]
        },
        {
          id: `1-3`,
          name: 'Jim Green sr.',
          description: '72',
          children: [
            {
              id: `1-3-1`,
              name: 'Jim Green',
              description: '42',
              children: [
                {
                  id: `1-3-1-1`,
                  name: 'Jim Green jr.',
                  description: '25'
                },
                {
                  id: `1-3-1-2`,
                  name: 'Jimmy Green sr.',
                  description: '18'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: `2`,
      name: 'Joe Black',
      description: '32'
    }
  ];
  mapOfExpandedData: { [id: string]: TreeNodeInterface[] } = {};

  collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if (!$event) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.id === d.id)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: TreeNodeInterface): TreeNodeInterface[] {
    const stack: TreeNodeInterface[] = [];
    const array: TreeNodeInterface[] = [];
    const hashMap = {};
    stack.push({...root, level: 0, expand: true});

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({...node.children[i], level: node.level! + 1, expand: true, parent: node});
        }
      }
    }

    return array;
  }

  visitNode(node: TreeNodeInterface, hashMap: { [id: string]: boolean }, array: TreeNodeInterface[]): void {
    if (!hashMap[node.id]) {
      hashMap[node.id] = true;
      array.push(node);
    }
  }

  ngOnInit(): void {
    this.listOfMapData.forEach(item => {
      this.mapOfExpandedData[item.id
        ] = this.convertTreeToList(item);
    });
  }
}
