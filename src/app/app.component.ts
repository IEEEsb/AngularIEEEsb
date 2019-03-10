import { Component, OnInit } from '@angular/core';

import { DriveService, LoadingService } from 'angular-ieeesb-lib';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {

	delay = 1000;
	items = ['bebida'];
	selected = '';
	loading = false;
	file;
	fileUrl;

	constructor(private driveService: DriveService, private loadingService: LoadingService) {}

	ngOnInit() {
		this.driveService.setHost('http://localhost:4003');
		this.loadingService.getLoading().subscribe((loading) => {
			this.loading = loading;
		})
	}

	toggleChanged() {
		setTimeout(() => {
			this.loading = false;
		}, this.delay);
	}

	getFile() {
		this.driveService.getFile().subscribe((data) => {
			this.file = data.file;
			this.fileUrl = data.url;
		});
	}

	getImage() {
		this.driveService.getImageFile().subscribe((data) => {
			this.file = data.file;
			this.fileUrl = data.url;
		});
	}
}
