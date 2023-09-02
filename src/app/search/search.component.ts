import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  enteredSearchValue: string = '';

  @Output()
  searchBarChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchBarChanged() {
    this.searchBarChanged.emit(this.enteredSearchValue);
  }

}
