import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ieeesb-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.less']
})
export class TitleComponent implements OnInit {

	@Input() title = '';
	@Input() link;
	@Input() linkLabel = '';
	@Input() search;
	@Input() disabled = false;
	@Output() searchChange = new EventEmitter<any>();
	@Output() callback = new EventEmitter<any>();

	constructor() { }

	ngOnInit() {
	}

}
