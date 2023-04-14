import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product_detail',
  templateUrl: './product_detail.component.html',
  styleUrls: ['../product.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  product: any = [];

  constructor(
    private _productService: ProductService, 
    private _activatedRoute: ActivatedRoute,
    ) {
    
     }

  ngOnInit() {
    // chú ý snapshot get params sự dụng tốt khi không tại sự dụng 
    // vd: nhập số id mới không phải lick vô link thì sẽ không tự lấy data mới 
    let id = this._activatedRoute.snapshot.params['id'];
    this.product = this._productService.getProductByID(id); 
  }



}