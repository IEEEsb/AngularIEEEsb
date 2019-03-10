import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'ieeesb-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

	@Input() items: any;
	@Input() align: String;
	@Input() user: any;
	@Input() activeLink: String;

	navbarOpen = false;

	constructor() { }

	ngOnInit() { }


	toggleNavbar() {
		this.navbarOpen = !this.navbarOpen;
	}

	userHasRoles(roles) {
		if (!this.user) return false;

		return roles.reduce((l, a) => this.user.roles.indexOf(a) >= 0 && l, true);
	}
}
