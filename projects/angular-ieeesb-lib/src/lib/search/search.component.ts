import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ieeesb-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.less']
})
export class SearchComponent {

	@Input() search;
	@Output() searchChange = new EventEmitter<any>();

	constructor() { }

	emit() {
		this.searchChange.emit(this.search);
	}

}
