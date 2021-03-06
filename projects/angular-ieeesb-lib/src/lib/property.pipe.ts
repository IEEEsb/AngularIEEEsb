import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'property'
})
export class PropertyPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		const properties = Array.isArray(args) ? args : args.split('.')
		return properties.reduce((prev, curr) => prev && prev[curr], value)
	}

}
