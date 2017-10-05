import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;

  // no private because for now we  are only going to use it in the constructor and not anywhere else in the class
  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories();
   }

  ngOnInit() {
  }

}
