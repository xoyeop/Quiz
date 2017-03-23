import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DropdownModule, SelectItem, ButtonModule } from 'primeng/primeng';

import { Globals } from './globals';

@Component({
	selector: 'preferpad',
	template: `
		<h3>선호하는 브라의 패드 두께를 선택해 주세요.</h3>
		<p-dropdown [options]="pads" [(ngModel)]="selectedPad"></p-dropdown>

		<br/><br/>
		<button pButton type="button" (click)="goBack()" label="BACK"></button>
		<button pButton type="button" (click)="goNext()" label="NEXT QUESTION"></button>

		<br/>
	`,
	styles: [`
	`]
})

export class PreferPadComponent {
	pads: SelectItem[];

	selectedPad: number = 0;

	constructor(
		private router: Router,
		private globals: Globals
	) {

		this.pads = [];
		this.pads.push({label: '노패드', value: 0});
		this.pads.push({label: '0.4mm', value: 0.4});
		this.pads.push({label: '1.5cm (약볼륨)', value: 1.5});
		this.pads.push({label: '3cm (강볼륨)', value: 3});
		this.pads.push({label: '5cm (왕뽕)', value: 5});
	}
	
	goBack() {
		this.router.navigate(['/pad']);
	}

	goNext() {
		this.globals.preferPadSize = null;
		this.globals.preferPadSize = this.selectedPad;

		this.router.navigate(['/brafit']);
	}
}
