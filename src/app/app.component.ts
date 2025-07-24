import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '';
  name = '';
  price = 0;
  index = -1;
  update = false;
  areEmptyFields = false;
  products: { name: string; price: number}[] = [];

  addPdt(){
    this.areEmptyFields = false;
    console.log("Added new product" + this.name +  " "+ this.price);
    if(this.name === '' || this.price == 0 ){
      this.areEmptyFields = true;
    }else{
      var product = {
        name : this.name,
        price: this.price
      };
    
      this.products.unshift(product);
      this.name = '';
      this.price = 0;
    }
    
  }
  updatePdt(index: number){
    this.name = this.products[index].name;
    this.price = this.products[index].price;
    this.update = true;
    this.index = index;
  } 
  updateInArray(){
    if(this.index >= 0){
      this.products[this.index].name = this.name;
      this.products[this.index].price = this.price;
      
    }
    this.name = '';
    this.price = 0;
    this.index = -1;
    this.update = false;
  }
  deletePdt(index:number){
    
    this.products.splice(index, 1);
  }

} 

