import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularIEEEsbLibModule } from '../../dist/angular-ieeesb-lib'

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AngularIEEEsbLibModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
