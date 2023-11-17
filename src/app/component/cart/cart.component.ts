import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  public products!:any[];
  public grtotal:number=0;

constructor(private cart:CartService){

}
ngOnInit():void{
this.cart.getProductes().subscribe(res=>{
  this.products=res;
  this.grtotal=this.cart.getTotalPrice();
})
}
empty(){
  this.cart.remove();
}
delete(item:any){
  this.cart.deleteIteam(item);

}
}
