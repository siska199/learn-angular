import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/lib/types';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  @Input() book : Book = {} as Book
  @Output() bookEmitter = new EventEmitter<Book>()

  addToChart(){
    console.log("test", this.book)
    this.bookEmitter.emit(this.book)
  }
}
