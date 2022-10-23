import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id:1,
      name: 'Iphong5',
      price: 500000,
      description: 'New'
    },
    {
      id:2,
      name: 'Iphong6',
      price: 600000,
      description: 'New'
    },
    {
      id:3,
      name: 'Iphong7',
      price: 700000,
      description: 'New'
    }
  ];

  getAll(){
    return this.products;
  }
  product: Product = {

  };
  getProduct(){
    return this.product;
  }
  findProduct(pr:any){
    return this.product = pr;
  }

  saveProduct(product: any){
    this.products.push(product);
  }

  updateProduct(product: any , id: number){
    for(let i=0; i< this.products.length; i++){
      if(this.products[i].id==product.id){
        this.products[i]= product
      }
    }
  }

  removeProduct(product: any){
    const index = this.products.indexOf(product)
    this.products.splice(index,1);
  }
  constructor() { }
}
