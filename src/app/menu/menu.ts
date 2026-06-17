import { Component ,inject} from '@angular/core';
import { cartService } from '../cart-service';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-menu',
  imports: [ProductCard],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  cartService = inject(cartService);
}
