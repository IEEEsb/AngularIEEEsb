import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ieeesb-loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.less']
})
export class LoadingComponent implements OnInit {

	@Input() loading = false;

	constructor() { }

	ngOnInit() {
	}

}
