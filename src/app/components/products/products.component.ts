import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ApiService} from "../../services/api.service";
import {MatDialog} from '@angular/material/dialog';
import {ProductDetailsComponent} from "./product-details/product-details.component";

export interface ProductDetailsData {
  productDetails: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList: any;

  constructor(private api: ApiService,
              private cartService: CartService,
              private dialog: MatDialog) {
  }


  openDetails(description: string) {
    this.dialog.open(ProductDetailsComponent, {
      data: {
        productDetails: description
      }
    });
  }


  ngOnInit(): void {
    this.api.getProduct()
      .subscribe((res: any) => {
        this.productList = res;

        this.productList.forEach((a: any) => {
          Object.assign(a, {quantity: 1, total: a.price});
        });
      })
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }

}
