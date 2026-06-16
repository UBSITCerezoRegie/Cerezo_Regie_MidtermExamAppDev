import { Injectable ,signal, computed} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class cartService {
  breakfastItems = signal([
    { id: 1, name: 'Ruins Longanisa', price: 250 },
    { id: 2, name: 'Tinapang Bangus', price: 280 },
    { id: 3, name: 'Robertos Arroz Caldo', price: 180 },
    { id: 4, name: 'Mt. Data Tapa Rice', price: 300 },
    { id: 5, name: 'French Toast', price: 180 }
  ]);
  
  coffeeItems = signal([
    { id: 6, name: 'Ruins Espresso', price: 120 },
    { id: 7, name: 'Americano', price: 130 },
    { id: 8, name: 'Cappuccino', price: 150 },
    { id: 9, name: 'Cafe Latte', price: 160 }
  ]);
  
  coldCoffeeItems = signal([
    { id: 10, name: 'Iced Latte', price: 170 },
    { id: 11, name: 'Iced Mocha', price: 180 }
  ]);
  
  teaItems = signal([
    { id: 12, name: 'Moroccan Mint Tea', price: 120 },
    { id: 13, name: 'Ruins Iced Tea', price: 110 }
  ]);
  
  mainDishItems = signal([
    { id: 14, name: 'Pinikpikan', price: 350 },
    { id: 15, name: 'Bagnet Fries', price: 220 }
  ]);
  
  dessertItems = signal([
    { id: 16, name: 'Rizals Tsokolate-e', price: 140 },
    { id: 17, name: 'Champorado', price: 150 },
    { id: 18, name: 'Iced Chocolate Shake', price: 190 }
  ]);

  private cardItems = signal<any[]>([]);
  
  cart = this.cardItems.asReadonly();

  totalPrice = computed (() => 
  this.cardItems().reduce(
    (sum,item) => sum + item.price, 0 
  )
  );

  addToCart(item: any){
    this.cardItems.update (
      current => [...current,item]
    );
  }
  clearCart(){
    this.cardItems.set([]);
  }
}
