import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Globals } from './globals';

@Component({
	selector: 'bandfit',
	template: `
		<h3>구입하신 비나제이 브라의 밴드 피팅 상태는 어떤가요?</h3>
		<div class="ui-g" style="margin-bottom:10px; text-align: center">
			<div class="ui-g-12">
				<img src="./resources/img/bandfit_img_1.png" width="40%"/><br/>
				<p-checkbox name="group1" value=1 label="잘 맞는다." [(ngModel)]="selectedBand"></p-checkbox>
			</div>
			<div class="ui-g-12">
				<img src="./resources/img/bandfit_img_2.png" width="40%"/><br/>
				<p-checkbox name="group1" value=2 label="너무 타이트해서 불편하다." [(ngModel)]="selectedBand"></p-checkbox>
			</div>
			<div class="ui-g-12">
				<img src="./resources/img/bandfit_img_3.png" width="40%"/><br/>
				<p-checkbox name="group1" value=3 label="살짝 루즈해서 자꾸 올라간다." [(ngModel)]="selectedBand"></p-checkbox>
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

export class BandfitComponent {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	selectedBand: string[] = [];

	goBack() {
		this.router.navigate(['/brafit']);
	}

	goNext() {
		this.globals.bandfitA = [];
		this.globals.bandfitA = this.selectedBand;

		this.router.navigate(['/bustsize']);
	}

}
