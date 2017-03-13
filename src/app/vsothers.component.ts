import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'vsothers',
	template: `
		<h3>선택하신 브랜드의 브라와 비나제이 브라를 비교해 주세요.</h3>
		<div class="ui-g" style="margin-bottom:10px">
			<div class="ui-g-12"><p-checkbox name="group1" value="비나제이 제품과 동일하다." label="비나제이 제품과 동일하다." [(ngModel)]="selectedVs"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="비나제이 제품이 약간 작다." label="비나제이 제품이 약간 작다." [(ngModel)]="selectedVs"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="비나제이 제품이 한치수 작다." label="비나제이 제품이 한치수 작다." [(ngModel)]="selectedVs"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="비나제이 제품이 약간 크다." label="비나제이 제품이 약간 크다." [(ngModel)]="selectedVs"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="비나제이 제품이 한치수 크다." label="비나제이 제품이 한치수 크다." [(ngModel)]="selectedVs"></p-checkbox></div>
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
		private router: Router
	) {}

	selectedVs: string[] = [];

	goBack() {
		this.router.navigate(['/others']);
	}

	goNext() {
		this.router.navigate(['/prefer']);
	}

}
