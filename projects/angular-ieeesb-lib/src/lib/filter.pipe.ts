import { Pipe, PipeTransform } from '@angular/core';

import { UtilsService } from './utils.service';

@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {

	constructor(private utilsService: UtilsService) { }

	transform(value: any, search: any, keys: any): any {
		return this.utilsService.filter({
			search,
			keys,
			items: value,
		})
	}

}
