import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,  MatSlideToggleModule ,MatGridListModule,FontAwesomeModule , RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
