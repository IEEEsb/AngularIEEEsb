import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { LoadingService } from './loading.service';
import { WindowRef } from './WindowRef';

@Injectable({
	providedIn: 'root'
})
export class DriveService {

	host = '';
	child;

	constructor(private winRef: WindowRef, private loadingService: LoadingService) { }

	setHost(host) {
		this.host = host;
	}

	getFile(type?) {
		this.loadingService.setLoading();
		const responseSubject: Subject<any> = new Subject<any>();

		const query = `?type=${type ? type : 'all'}`;
		window.addEventListener("message", (event) => {
			if(!event.data.file) return;
			console.log(event.data)
			responseSubject.next({
				file: event.data.file,
				url: event.data.url
			});
		}, false);

		const options = `width=${window.screen.availWidth},height=${window.screen.availHeight},toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no`;
		this.child = window.open(`${this.host}/#/browser${query}`, 'Browser', options);
		this.checkChild();
		return responseSubject.asObservable();
	}

	checkChild() {
		if (this.child && this.child.closed) {
			return this.loadingService.unsetLoading();;
		}
		setTimeout(this.checkChild.bind(this), 100);

	}

	getImageFile() {
		return this.getFile('image');
	}
}
