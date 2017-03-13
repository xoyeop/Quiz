import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Globals } from './globals';

import { InputTextModule, ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'size',
	template: `
		<h3>가슴둘레를 측정해 주세요.</h3>
		<img src="./resources/img/size_img.png" width="80%"/>
		<div class="ui-g">
			<div class="ui-g-3">밑가슴 둘레:</div>
			<div class="ui-g-9"><input type="number" pInputText [(ngModel)]="underSize" /> mm</div>
			<div class="ui-g-3">윗가슴 둘레:</div>
			<div class="ui-g-9"><input type="number" pInputText [(ngModel)]="upperSize" /> mm</div>
		</div>
		<br/>
		<button pButton type="button" (click)="goBack()" label="BACK"></button>
		<button pButton type="button" (click)="goNext()" label="NEXT QUESTION"></button>

		<br/>
	`,
	styles: [`
	`]
})

export class SizeComponent {
	underSize: number;
	upperSize: number;

	constructor(
		private router: Router,
		private globals: Globals
	) {}
	
	goBack() {
		this.router.navigate(['/product']);
	}

	goNext() {
		this.globals.upperSize = this.upperSize;
		this.globals.underSize = this.underSize;

		this.router.navigate(['/pad']);
	}
}
