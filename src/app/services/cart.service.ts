import { Prod } from './../Models/prod';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
public productList= new BehaviorSubject<any>([])
public cartItemList:any=[]
  constructor() { }

  getProductes(){
    return this.productList.asObservable();
  }

  addToCart(product:any){
this.cartItemList.push(product);
this.productList.next(this.cartItemList)
this.getTotalPrice();
  }

  getTotalPrice():number{
    let gtotal=0;
    this.cartItemList.map((a:any)=>{
      gtotal +=a.total;
    })
    return gtotal;
  }

  remove(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList)

  }
  deleteIteam(product:any){
this.cartItemList.map((a:any,index:any)=>{
  if(product.id === a.id)
  this.cartItemList.splice(index,1)
})
this.productList.next(this.cartItemList)

  }
}
