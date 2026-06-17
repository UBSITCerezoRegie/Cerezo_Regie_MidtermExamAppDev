import { Injectable ,signal, computed} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class cartService {
  breakfastItems = signal([
    { id: 1, name: 'Ruins Longanisa', price: 250, description: 'Sweet and savory native Baguio-style longanisang hubad, served with garlic rice and fried egg.' },
    { id: 2, name: 'Tinapang Bangus', price: 280, description: 'Smoked milkfish belly flaked and served with a side of fresh tomato, onion salsa, and garlic rice.' },
    { id: 3, name: 'Robertos Arroz Caldo', price: 180, description: 'Hearty, comforting ginger-infused rice porridge topped with toasted garlic and chicharon.' },
    { id: 4, name: 'Mt. Data Tapa Rice', price: 300, description: 'Savory cured highland beef served over garlic rice with scrambled eggs and fresh tomatoes.' },
    { id: 5, name: 'French Toast', price: 180, description: 'Thick, fluffy brioche soaked in rich egg batter, dusted with powdered sugar and served with maple syrup.' }
  ]);
  
  coffeeItems = signal([
    { id: 6, name: 'Ruins Espresso', price: 120, description: 'A rich, dark, and robust single or double shot extracted to perfection.' },
    { id: 7, name: 'Americano', price: 130, description: 'Our bold espresso diluted with hot water for a smooth, classic finish.' },
    { id: 8, name: 'Cappuccino', price: 150, description: 'Equal parts espresso, steamed milk, and thick velvety milk foam.' },
    { id: 9, name: 'Cafe Latte', price: 160, description: 'A smooth and creamy blend of espresso and steamed milk, lightly topped with foam.' }
  ]);
  
  
  coldCoffeeItems = signal([
    { id: 10, name: 'Iced Latte', price: 170, description: 'Chilled espresso combined with fresh milk and poured over ice.' },
    { id: 11, name: 'Iced Mocha', price: 180, description: 'Our signature espresso with rich chocolate, chilled milk, and ice.' }
  ]);
  
  
  teaItems = signal([
    { id: 12, name: 'Moroccan Mint Tea', price: 120, description: 'Refreshing, aromatic green tea brewed with fresh spearmint leaves.' },
    { id: 13, name: 'Ruins Iced Tea', price: 110, description: 'Our signature house-brewed iced tea infused with citrus and local herbs.' }
  ]);
  
  
  mainDishItems = signal([
    { id: 14, name: 'Pinikpikan', price: 350, description: 'Traditional Cordilleran chicken stew infused with etag (smoked pork) and native spices.' },
    { id: 15, name: 'Bagnet Fries', price: 220, description: 'Crispy, deep-fried pork belly strips served with a spicy vinegar or liver dip.' }
  ]);
  
  
  dessertItems = signal([
    { id: 16, name: 'Rizals Tsokolate-e', price: 140, description: 'A traditional, thick, and rich local hot chocolate served the old-world way.' },
    { id: 17, name: 'Champorado', price: 150, description: 'Traditional thick chocolate rice porridge, topped with toasted dilis and a drizzle of milk.' },
    { id: 18, name: 'Iced Chocolate Shake', price: 190, description: 'A refreshing blended chocolate beverage topped with whipped cream and cocoa dust.' }
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
  cartSummary = computed(() => {
    const grouped: any[] = [];
  
    this.cart().forEach(item => {
      const existing = grouped.find(
        p => p.name === item.name
      );
  
      if (existing) {
        existing.quantity++;
      } else {
        grouped.push({
          name: item.name,
          quantity: 1
        });
      }
    });
  
    return grouped;
  });
}
