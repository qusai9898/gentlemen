import { Component , ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CartComponent } from './component/cart/cart.component';
import { StoreComponent } from './component/store/store.component';
import { NgToastModule } from 'ng-angular-popup';
import { NgToastService } from 'ng-angular-popup';
import { routes } from './app.routes';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CartService } from './services/cart.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

 @Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, StoreComponent, CartComponent,NgToastModule, RouterLink, RouterLinkActive,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'ohmy';
  faCart = faCartPlus;
  public total=0;
 

constructor(private cart:CartService){

}
ngOnInit():void{
this.cart.getProductes().subscribe(res=>{
this.total= res.length;
})

}
}
