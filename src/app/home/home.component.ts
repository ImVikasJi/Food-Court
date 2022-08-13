import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  constructor(private foodSerice: FoodService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchItem']) {
        this.foods = this.foodSerice
          .getAll()
          .filter((food) =>
            food.name.toLowerCase().includes(params['searchItem'].toLowerCase())
          );
      } else if(params['tag']){
        console.log(params['tag']);        
        this.foods = this.foodSerice.getAllFoodByTag(params['tag'])
      }
      else this.foods = this.foodSerice.getAll();
    });
  //  this.foods = this.foodSerice.getAll(); // Get All food images from food Services
  }
}
