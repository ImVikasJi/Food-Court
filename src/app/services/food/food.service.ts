import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAllFoodByTag(tag: string): Foods[] {
    console.log('Inside getAllFoodByTag');
    console.log(
      tag == 'All'
        ? this.getAll()
        : this.getAll().filter((food) => food.tags?.includes(tag))
    );
    console.log(
      'Not All ' + this.getAll().filter((food) => food.tags?.includes(tag))
    );

    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }
  getAllTag():Tag[]{
    return[
      {name: 'All', count: 8},
      {name: 'FastFood', count: 6},
      {name: 'Pizza', count: 4},
      {name: 'Lunch', count: 5},
      {name: 'SlowFood', count: 2},
      {name: 'Hamburger', count: 1},
      {name: 'Fry', count: 1},
      {name: 'Soup', count: 1}
    ]
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20 minutes',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30 minutes',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15 minutes',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20 minutes',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50 minutes',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50 minutes',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Club Sandwitch',
        price: 9,
        cookTime: '10-15 minutes',
        favorite: false,
        origins: ['indian', 'chinese'],
        stars: 4.0,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 8,
        name: 'Honey Chilli Potatoes',
        price: 9,
        cookTime: '20-30 minutes',
        favorite: false,
        origins: ['indian', 'italy'],
        stars: 4.0,
        imageUrl: '/assets/food-2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ];
  }
}
