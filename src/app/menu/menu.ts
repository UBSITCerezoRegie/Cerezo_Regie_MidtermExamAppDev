import { Component ,inject} from '@angular/core';
import { cartService } from '../cart-service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  cartService = inject(cartService);
}
