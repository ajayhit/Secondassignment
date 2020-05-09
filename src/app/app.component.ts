import { Component, OnInit } from '@angular/core';
import { Iproduct } from './Iproduct';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'secondclass';
  width = '105';
  height = '109';
  color='red';
  color1='green';
  color2='#e89f44';
  textboxsrh='';

  product: Iproduct[] = [];
 changeText: boolean;
  constructor(){
   
  }

  changeover(evt,k)
  {
    evt.currentTarget.src=k;
  }
  changeout(evt,k)
  {
    evt.currentTarget.src=k;
  }
  ngOnInit(){
    this.product = this.getproduct();
    this.changeText = false;
  }
  getproduct(): Iproduct[]{
    return[
      {
        productid: 1,
        productname: 'Nike Tshirt',
        productcode: 'PRO1',
        Price: 100,
        Frontimage: 'https://raw.githubusercontent.com/ajayhit/Secondassignment/master/src/assets/Image/nikefront.jpeg',
        Backimage: 'https://raw.githubusercontent.com/ajayhit/Secondassignment/master/src/assets/Image/nikeback.jpeg'
      },
      {
        productid: 2,
        productname: 'United Colors Of Benetton Tshirt',
        productcode: 'PRO2',
        Price: 500,
        Frontimage: 'https://raw.githubusercontent.com/ajayhit/Secondassignment/master/src/assets/Image/unitedfront.jpeg',
        Backimage: 'https://raw.githubusercontent.com/ajayhit/Secondassignment/master/src/assets/Image/unitedback.jpeg'
      },
      {
        productid: 3,
        productname: 'Levis Tshirt',
        productcode: 'PRO3',
        Price: 700,
        Frontimage: 'https://raw.githubusercontent.com/ajayhit/Secondassignment/master/src/assets/Image/leviefront.jpeg',
        Backimage: 'https://raw.githubusercontent.com/ajayhit/Secondassignment/master/src/assets/Image/leviesback.jpeg'
      },
      {
        productid: 4,
        productname: 'Tommy Hilfiger',
        productcode: 'PRO4',
        Price: 800,
        Frontimage: 'https://raw.githubusercontent.com/ajayhit/Secondassignment/master/src/assets/Image/tommyfront.jpeg',
        Backimage: 'https://raw.githubusercontent.com/ajayhit/Secondassignment/master/src/assets/Image/tommyback.jpeg'
      }];
    // tslint:disable-next-line:no-trailing-whitespace
    }    
}
