import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ieeesb-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

	@Input() label: String[] = [];
	@Input() link: String;
	@Input() disabled: Boolean = false;
	@Input() danger: Boolean;

	constructor() { }

	ngOnInit() {
	}

}
