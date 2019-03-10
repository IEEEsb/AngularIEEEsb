import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ieeesb-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit {

	@Input() item: any = {};
	@Input() label: String = '';
	@Input() options: String[] = [];
	@Input() optionsLabels: String[] = [];
	@Input() editing: Boolean = true;

	@Output() itemChange = new EventEmitter<any>();

	constructor() { }

	ngOnInit() {
	}

}
