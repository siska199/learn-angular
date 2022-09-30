import { Component, OnInit } from '@angular/core';
import { Book } from 'src/lib/types';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}

  
  books : Book[] = [...Array(10)].map((_,i)=>({
    key : i,
    name : `Clean Code dvckjnsv kjfebvskjev kjfevnksje fvnsoid ${i}`,
    author : `'Robert C Marthin ${i}`,
    price : 700,
    src : 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg'
  }))
  
  cart : Book[] = [] as Book[]

  addToCart (book:Book){
    this.cart.push(book)
  }
  
  // isShowBooks : boolean = true
  // buttonName = "Hide Book"
  // handleClick(){
  //   this.isShowBooks  = !this.isShowBooks
  //   this.buttonName = this.isShowBooks?"Hide Book":"Show Book"
  // }
  // value=""


}
