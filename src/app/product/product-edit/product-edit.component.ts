import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  product: Product = {
    id: 1,
    name: '',
    price: 1,
    description: ''
  };

  getProduct(){
    this.product = this.productService.getProduct();
  }


  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  })

  submit(){
    const product= this.productForm.value;
    this.productService.updateProduct(product, product.id);
    this.productForm.reset();
  }

}
