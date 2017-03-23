import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Globals } from './globals';

@Component({
	selector: 'shoulder',
	template: `
		<h3>구입하신 비나제이 브라의 어깨끈 피팅 상태는 어떠한가요?</h3>
		<div class="ui-g" style="margin-bottom:10px; text-align:center">
			<div class="ui-g-12">
				<img src="./resources/img/shoulder_img_1.png" width="40%"/><br/>
				<p-radioButton name="group1" value="1" label="잘 맞는다." [(ngModel)]="selectedShoulder"></p-radioButton>
			</div>
			<div class="ui-g-12">
				<img src="./resources/img/shoulder_img_2.png" width="40%"/><br/>
				<p-radioButton name="group1" value="2" label="타이트하다." [(ngModel)]="selectedShoulder"></p-radioButton>
			</div>
			<div class="ui-g-12">
				<img src="./resources/img/shoulder_img_3.png" width="40%"/><br/>
				<p-radioButton name="group1" value="3" label="흘러내린다." [(ngModel)]="selectedShoulder"></p-radioButton>
			</div>
		</div>

		<br/><br/>
		<button pButton type="button" (click)="goBack()" label="BACK"></button>
		<button pButton type="button" (click)="goNext()" label="NEXT QUESTION"></button>

		<br/>
	`,
	styles: [`
	`]
})

export class ShoulderComponent {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	selectedShoulder: number = null;

	goBack() {
		this.router.navigate(['/bustsize']);
	}

	goNext() {
		this.globals.shoulderA = null;
		this.globals.shoulderA = this.selectedShoulder;

		this.router.navigate(['/others']);
	}

}
