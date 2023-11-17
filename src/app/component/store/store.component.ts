import { StoreInfo } from './../../ViewModels/store-info';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import { Prod } from '../../Models/prod';
import { CartService } from '../../services/cart.service';
import { NgToastService } from 'ng-angular-popup';
import { NgxPaginationModule } from 'ngx-pagination';


import { Observable, observable } from 'rxjs';
@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatTableModule, MatCardModule, MatButtonModule, NgxPaginationModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
 prodlist:Prod[];
 datasource=[];

 collection = [];
p: string|number|undefined;

 constructor(private cart:CartService, private toast: NgToastService){
 
  this.prodlist=[ 
    
    {id:2,name:'Male Cotton',dis:'Running Horses Blue Gray Y2K Casual Shirt Mens Horse Art Color Shirt Spring Trending Blouses Long Sleeve Design Oversized Tops',price:50,imgURL:"/assets/img/model2.png"},
    {id:3,name:'Male Cotton',dis:'Brittany Spaniel Official Dog of The Coolest Lovers 100% Cotton Men Summer Sale 100 % Cotton T Shirt Funny Tee Shirt',price:87,imgURL:"/assets/img/model3.png"},
    {id:4,name:'Male Cotton',dis:'Mens Jeans 2022 New Mens Casual Pants Ripped Spring And Autumn Sports Jeans Pocket Straight Street Run Soft Denim Neutral Slow ',price:87,imgURL:"/assets/img/model4.png"},
    {id:5,name:'Male Cotton',dis:'Korean literature art turtleneck sweater men autumn winter lazy style knitted sweater cartoon devil print wool clothes pullovers    ',price:87,imgURL:"/assets/img/model5.png"},
    {id:6,name:'Male Cotton',dis:'Korean literature art turtleneck sweater men autumn winter lazy style knitted sweater cartoon devil print wool clothes pullovers    ',price:87,imgURL:"/assets/img/model8.png"}
  , {id:2,name:'Male Cotton',dis:'2023 Summer Mens Luxury Clothing Knitted Short Sleeve Polo Shirt Casual Streetwear Lapel Button Down Patchwork Breathable Tees',price:50,imgURL:"/assets/img/model9.png"},
  {id:3,name:'Male Cotton',dis:'Fashion Knit Solid Color Mens Polo Shirt Slim Short Sleeve Turn-down Collar Ribbed Polo Tee 2023 Summer Men Clothes Casual Top',price:87,imgURL:"/assets/img/model10.png"},
  {id:4,name:'Male Cotton',dis:'2021 new mens casual plaid suit jacket male linen plaid business self-cultivation wedding dress party suit coat plus Size S-4X',price:87,imgURL:"/assets/img/model11.png"},
  {id:5,name:'Male Cotton',dis:'Men Cotton Linen Blouse Summer O-Neck Long Sleeve Loose Button Solid Male Shirt Blouse BSD-ZT170',price:87,imgURL:"/assets/img/model12.png"},
  {id:6,name:'Male Cotton',dis:'2023 Summer New Gym T shirt Men Clothing Bodybuilding Fitness Loose Casual short sleeve t-shirt cotton fashion muscle tshirt man  ',price:87,imgURL:"/assets/img/model16.png"},
  {id:2,name:'Male Cotton',dis:'Men Shirt Solid Color Half High Collar Autumn Top Casual Long Sleeve Men Base Shirt Anti-shrink Elastic Men Top for Daily Wear  ',price:50,imgURL:"/assets/img/model14.png"},
  {id:3,name:'Male Cotton',dis:'7XL ( Jacket + Vest+Pants ) High-end Brand Formal Business Mens Suit Three-piece Groom Wedding Dress Solid Color Suit Plus Size',price:87,imgURL:"/assets/img/model15.png"},
  {id:4,name:'Male Cotton',dis:'Men Business Formal Slim Fit Wedding Prom Suits Male Boutique Plaid Design Groom Dress Blazers Jacket Pants Vest 3 Pieces Set  ',price:87,imgURL:"/assets/img/model16.png"},
  {id:5,name:'Male Cotton',dis:'(Jacket+Pants) Men Suits Slim Fit One Button Wedding Suits Custom Made 2 Pieces Business Formal Groom Tuxedo Ternos 5XL-M  ',price:87,imgURL:"/assets/img/model17.png"},
  {id:6,name:'Male Cotton',dis:'Korean literature art turtleneck sweater men autumn winter lazy style knitted sweater cartoon devil print wool clothes pullovers    ',price:87,imgURL:"/assets/img/model18.png"}
  ]
 }
addToCart(item:any){
this.cart.addToCart(item);
this.toast.success({detail:'Add to cart', summary:'item has been added', duration:1000})
}

ngOnInit():void{
this.prodlist.forEach((a:any)=>{  
  Object.assign(a,{quantity:1,total:a.price})
})


}

}
