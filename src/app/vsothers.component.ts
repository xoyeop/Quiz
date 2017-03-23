import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Globals } from './globals';
import { VSPROD } from './const/vsprod';

@Component({
	selector: 'vsothers',
	template: `
		<h3>선택하신 브랜드의 브라와 비나제이 브라를 비교해 주세요.</h3>
		<div class="ui-g" style="margin-bottom:10px">
			<div class="ui-g-6">
				<div class="ui-g-2">컵사이즈<br/><br/><br/><br/><br/><br/><br/><br/></div>
				<div class="ui-g-10"><p-radioButton name="group1" value=0 label="비나제이 제품과 동일하다." [(ngModel)]="selectedVs"></p-radioButton></div>
				<div class="ui-g-10"><p-radioButton name="group1" value=-1 label="비나제이 제품이 약간 작다." [(ngModel)]="selectedVs"></p-radioButton></div>
				<div class="ui-g-10"><p-radioButton name="group1" value=-2 label="비나제이 제품이 한치수 작다." [(ngModel)]="selectedVs"></p-radioButton></div>
				<div class="ui-g-10"><p-radioButton name="group1" value=1 label="비나제이 제품이 약간 크다." [(ngModel)]="selectedVs"></p-radioButton></div>
				<div class="ui-g-10"><p-radioButton name="group1" value=2 label="비나제이 제품이 한치수 크다." [(ngModel)]="selectedVs"></p-radioButton></div>
			</div>
			<div class="ui-g-6">
				<div class="ui-g-2">브라둘레<br/><br/><br/><br/><br/><br/><br/><br/></div>
				<div class="ui-g-10"><p-radioButton name="group2" value=0 label="비나제이 제품과 동일하다." [(ngModel)]="selectedVsBra"></p-radioButton></div>
				<div class="ui-g-10"><p-radioButton name="group2" value=-1 label="비나제이 제품이 약간 작다." [(ngModel)]="selectedVsBra"></p-radioButton></div>
				<div class="ui-g-10"><p-radioButton name="group2" value=-2 label="비나제이 제품이 한치수 작다." [(ngModel)]="selectedVsBra"></p-radioButton></div>
				<div class="ui-g-10"><p-radioButton name="group2" value=1 label="비나제이 제품이 약간 크다." [(ngModel)]="selectedVsBra"></p-radioButton></div>
				<div class="ui-g-10"><p-radioButton name="group2" value=2 label="비나제이 제품이 한치수 크다." [(ngModel)]="selectedVsBra"></p-radioButton></div>
			</div>
		</div>

		<br/>
		<button pButton type="button" (click)="goBack()" label="BACK"></button>
		<button pButton type="button" (click)="goNext()" label="NEXT QUESTION"></button>

		<br/>
	`,
	styles: [`
	`]
})

export class VsOthersComponent {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	selectedVs: number = 0;
	selectedVsBra: number = 0;

	goBack() {
		this.router.navigate(['/others']);
	}

	goNext() {
		this.globals.otherProd.vs = null;
		this.globals.otherProd.vs = this.selectedVs;

		this.globals.otherProd.vsBra = null;
		this.globals.otherProd.vsBra = this.selectedVsBra;

		this.router.navigate(['/prefer']);
	}

}
