import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  productList: any = [];

  constructor(
    private _productService: ProductService, 
    private _router: Router) {
    
     }

  ngOnInit() {
    this.productList = this._productService.productList;
  }

  showMore(id: number) {
    //   cách truyển tham số và chuyển trang bằng navigate
    this._router.navigate(['/product_detail', id]);
  }


}