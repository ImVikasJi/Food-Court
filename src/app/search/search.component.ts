import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from 'src/app/shared/models/food';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchItem: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchItem']) this.searchItem = params['searchItem'];
    });
  }

  searchFood(): void {
    if (this.searchItem) {
      this.router.navigateByUrl('/search/' + this.searchItem);
    }
    // }else{
    //   this.router.navigateByUrl('/search/' + 'not-found');
    // }
  }
}
