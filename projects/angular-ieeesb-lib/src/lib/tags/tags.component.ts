import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MatAutocomplete } from '@angular/material';

@Component({
	selector: 'ieeesb-tags',
	templateUrl: './tags.component.html',
	styleUrls: ['./tags.component.less']
})
export class TagsComponent implements OnInit {

	@Input() item: any;
	@Input() label: String = '';
	@Input('tags') rawTags: String[];
	@Input() editing: Boolean = true;

	@Output() itemChange = new EventEmitter<any>();
	@Output() enter = new EventEmitter<any>();

	@ViewChild('inputfield') inputfield: ElementRef<HTMLInputElement>;
	@ViewChild('auto') matAutocomplete: MatAutocomplete;

	search = '';

	constructor() { }

	ngOnInit() {
	}

	get tags() {
		const filterValue = this.search.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

		return this.rawTags.filter(tag => tag.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(filterValue) > -1 && this.item.indexOf(tag) < 0);
	}

	addTag(tag) {
		if (tag === '') return;
		if(!this.item) {
			this.item = [];
		}
		if (this.item.indexOf(tag) > -1) return;

		this.item.push(tag);
		this.itemChange.emit(this.item);
		this.inputfield.nativeElement.value = '';
	}

	add(tag): void {
		// Add fruit only when MatAutocomplete is not open
		// To make sure this does not conflict with OptionSelected Event
		if (!this.matAutocomplete.isOpen) {
			this.addTag(tag);
		}
	}

	removeTag(tag) {
		if(this.item.indexOf(tag) < 0) return;
		this.item.splice(this.item.indexOf(tag), 1);
		this.itemChange.emit(this.item);
	}

}
