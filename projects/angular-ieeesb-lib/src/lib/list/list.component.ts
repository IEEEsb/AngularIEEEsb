import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
	selector: 'ieeesb-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

	@Input('items') rawItems: any[] = [];
	@Input() labels: String[] = [];
	@Input() keys: any[] = [];
	@Input() dateFormat: string = 'dd/MM/yyyy';
	@Input() link: String;
	@Input() linkKey: any = '';
	@Input() linkLabel: String = '';
	@Input() disabled: String = '';

	items: any[] = [];

	@Output('callback') _callback = new EventEmitter<any>();

	constructor(private cdRef:ChangeDetectorRef) { }

	ngOnInit() {
	}

	callback(item) {
		this._callback.emit(this.linkKey.split('.').reduce((prev, curr) => prev && prev[curr], item))
	}

	detectChanges() {
		this.cdRef.detectChanges();
	}

}
