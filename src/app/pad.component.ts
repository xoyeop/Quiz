import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DropdownModule, SelectItem, ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'pad',
	template: `
		<h3>착용하신 브라의 패드 두께를 선택해 주세요.</h3>
		<p-dropdown [options]="pads" ></p-dropdown>

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

	selectedPad: string;

	constructor(
		private router: Router
	) {

		this.pads = [];
		this.pads.push({label: '노패드', value: 'no'});
		this.pads.push({label: '0.4mm', value: '0.4'});
		this.pads.push({label: '1.5cm', value: '1.5'});
		this.pads.push({label: '3cm', value: '3'});
	}
	
	goBack() {
		this.router.navigate(['/size']);
	}

	goNext() {
		this.router.navigate(['/brafit']);
	}
}
