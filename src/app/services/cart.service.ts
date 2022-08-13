import { Injectable } from '@angular/core';
import { CartItem } from '../shared/CartItem';
import { Cart } from '../shared/models/Cart';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  
  addToCart(food:Foods){
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId: number){
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
  }

  changeQuantity(quantity:number, foodId:number){
    let CartItem = this.cart.items.find(item => item.food.id === foodId);

    if(!CartItem) return;
    CartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
