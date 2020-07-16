import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static.toiimg.com/thumb/msid-66476758,width-800,height-600,resizemode-75,imgsize-1640939,pt-32,y_pad-40/66476758.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
