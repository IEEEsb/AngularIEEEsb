import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatInputModule,
	MatAutocompleteModule,
	MatChipsModule,
	MatIconModule,
	MatSelectModule,
	MatSlideToggleModule,
	MatProgressBarModule,
	MatButtonModule,
	MatTabsModule,
	MatRippleModule,
	MatCardModule,
	MatToolbarModule,
} from '@angular/material';

import { UtilsService } from './utils.service';
import { LoadingService } from './loading.service';
import { WindowRef } from './WindowRef';

import { SelectComponent } from './select/select.component';
import { ButtonComponent } from './button/button.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { PropertyPipe } from './property.pipe';
import { MenuComponent } from './menu/menu.component';
import { SectionComponent } from './section/section.component';
import { FilterPipe } from './filter.pipe';
import { TitleComponent } from './title/title.component';
import { TagsComponent } from './tags/tags.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
	declarations: [
		SelectComponent,
		ButtonComponent,
		PaginationComponent,
		SearchComponent,
		ListComponent,
		PropertyPipe,
		MenuComponent,
		SectionComponent,
		FilterPipe,
		TitleComponent,
		TagsComponent,
		LoadingComponent,
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		RouterModule,
		HttpClientModule,
		MatInputModule,
		MatAutocompleteModule,
		MatChipsModule,
		MatIconModule,
		MatSelectModule,
		MatProgressBarModule,
	],
	providers: [
		UtilsService,
		LoadingService,
		WindowRef,
	],
	exports: [
		SelectComponent,
		ButtonComponent,
		PaginationComponent,
		SearchComponent,
		ListComponent,
		MenuComponent,
		SectionComponent,
		FilterPipe,
		TitleComponent,
		TagsComponent,
		LoadingComponent,
		MatInputModule,
		MatSlideToggleModule,
		MatChipsModule,
		MatButtonModule,
		MatTabsModule,
		BrowserAnimationsModule,
		MatRippleModule,
		MatIconModule,
		MatCardModule,
		MatToolbarModule,
	],
})
export class AngularIEEEsbLibModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AngularIEEEsbLibModule,
			providers: [ UtilsService, LoadingService, WindowRef ]
		};
	}
}
