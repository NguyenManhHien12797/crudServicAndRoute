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
  productForm: FormGroup;

  constructor(private productService: ProductService) {
   const product = this.getProduct();
    this.productForm = new FormGroup({
      id: new FormControl(product.id),
      name: new FormControl(product.name),
      price: new FormControl(product.price),
      description: new FormControl(product.description),
    })
  }

  ngOnInit(): void {

  }

  // product: Product = {
  //   id: 1,
  //   name: '',
  //   price: 1,
  //   description: ''
  // };

  getProduct(){
    return  this.productService.getProduct();
  }




  submit(){
    const product= this.productForm.value;
    this.productService.updateProduct(product, product.id);
    this.productForm.reset();
  }

}
