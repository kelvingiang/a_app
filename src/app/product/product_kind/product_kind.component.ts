import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product_kind',
  templateUrl: './product_kind.component.html',
  styleUrls: ['../product.component.scss']
})
export class ProductKindComponent implements OnInit {

  kind: string;
  productKindList: any=[];

  constructor(
    private _productService : ProductService, 
    private _activateRoute : ActivatedRoute) { }

  ngOnInit() {
   this.kind = this._activateRoute.snapshot.params['kind'];    
   this.productKindList = this._productService.getProductByKind(this.kind);
   console.log(this.productKindList);
  }

}
