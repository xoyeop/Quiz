import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Globals } from './globals';

@Component({
	selector: 'prefer',
	template: `
		<h3>원하시는 취향의 브라는 무엇인가요?</h3>
		<div class="ui-g" style="margin-bottom:10px">
			<div class="ui-g-12"><p-radioButton name="group1" value=1 label="모르겠다." [(ngModel)]="selectedPrefer"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value=2 label="저중심 브라" [(ngModel)]="selectedPrefer"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value=3 label="3/4컵 브라" [(ngModel)]="selectedPrefer"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value=4 label="1/2컵 브라" [(ngModel)]="selectedPrefer"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value=5 label="Full컵 브라" [(ngModel)]="selectedPrefer"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value=6 label="홑겹 브라" [(ngModel)]="selectedPrefer"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value=7 label="노와이어 브라" [(ngModel)]="selectedPrefer"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value=8 label="기타"></p-radioButton></div>
		</div>
		<br/>
		<button pButton type="button" (click)="goBack()" label="BACK"></button>
		<button pButton type="button" (click)="goNext()" label="NEXT QUESTION"></button>

		<br/>
	`,
	styles: [`
	`]
})

export class PreferComponent {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	selectedPrefer: number = 1;

	goBack() {
		this.router.navigate(['/vsothers']);
	}

	goNext() {
		this.globals.preferA = null;
		this.globals.preferA = this.selectedPrefer;
		console.log(this.globals.preferA);

		this.router.navigate(['/color']);
	}

}
