import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoadingService {

	timeout;
	delay = 250;
	loaders = 0;
	time = 0;

	private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor() { }

	getLoading() {
		return this.loadingSubject.asObservable();
	}

	setLoading() {
		this.loaders++;
		this.time = Date.now();
		this.loadingSubject.next(true);
		if(this.timeout) {
			clearTimeout(this.timeout);
		}
	}

	unsetLoading() {
		this.loaders--;
		if (this.loaders < 0) this.loaders = 0;
		if(this.loaders == 0) {
			this.timeout = setTimeout(() => {
				this.loadingSubject.next(false);
			}, this.delay - (Date.now() - this.time));
		}
	}
}
