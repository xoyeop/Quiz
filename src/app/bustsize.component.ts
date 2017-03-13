import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Globals } from './globals';

@Component({
	selector: 'bustsize',
	template: `
		<h3>자신의 가슴 크기는 어떤가요?</h3>
			<p-radioButton name="group1" value="bustLeft" label="왼쪽가슴이 더 크다." [(ngModel)]="selectedBustSize"></p-radioButton><br/>
			<p-radioButton name="group1" value="bustRight" label="오른쪽 가슴이 더 크다." [(ngModel)]="selectedBustSize"></p-radioButton><br/>
			<p-radioButton name="group1" value="bustSame" label="양쪽 가슴크기가 같다." [(ngModel)]="selectedBustSize"></p-radioButton><br/>

		<br/><br/>
		<button pButton type="button" (click)="goBack()" label="BACK"></button>
		<button pButton type="button" (click)="goNext()" label="NEXT QUESTION"></button>

		<br/>
	`,
	styles: [`
	`]
})

export class BustSizeComponent {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	selectedBustSize: string = null;

	goBack() {
		this.router.navigate(['/bandfit']);
	}

	goNext() {

		this.router.navigate(['/others']);
	}

}
