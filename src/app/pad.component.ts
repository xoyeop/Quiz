import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DropdownModule, SelectItem, ButtonModule } from 'primeng/primeng';

import { Globals } from './globals';

@Component({
	selector: 'pad',
	template: `
		<h3>착용하신 브라의 패드 두께를 선택해 주세요.</h3>
		<p-dropdown [options]="pads" [(ngModel)]="selectedPad"></p-dropdown>

		<br/><br/>
		<button pButton type="button" (click)="goBack()" label="BACK"></button>
		<button pButton type="button" (click)="goNext()" label="NEXT QUESTION"></button>

		<br/>
	`,
	styles: [`
	`]
})

export class PadComponent {
	pads: SelectItem[];

	selectedPad: number = 0;

	constructor(
		private router: Router,
		private globals: Globals
	) {

		this.pads = [];
		this.pads.push({label: '노패드', value: 0});
		this.pads.push({label: '0.4mm', value: 0.4});
		this.pads.push({label: '1.5cm', value: 1.5});
		this.pads.push({label: '3cm', value: 3});
	}
	
	goBack() {
		this.router.navigate(['/size']);
	}

	goNext() {
		this.globals.padSize = null;
		this.globals.padSize = this.selectedPad;

		this.router.navigate(['/brafit']);
	}
}
