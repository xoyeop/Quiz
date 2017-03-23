import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Globals } from './globals';

@Component({
	selector: 'brafit',
	template: `
		<h3>구입하신 비나제이 브라의 피팅 상태는 어떤가요?</h3>
		<div class="ui-g" style="text-align: center">
			<div class="ui-g-4">
				<img src="./resources/img/brafit_img_1.png" width="70%" /><br/>
				<p-checkbox name="group1" value="1" label="잘 맞는다." [(ngModel)]="selectedFit"></p-checkbox><br/>
			</div>
			<div class="ui-g-4">
				<img src="./resources/img/brafit_img_2.png" width="70%" /><br/>
				<p-checkbox name="group1" value="2" label="캡 위로 가슴이 비어져 나온다." [(ngModel)]='selectedFit'></p-checkbox><br/>
			</div>
			<div class="ui-g-4">
				<img src="./resources/img/brafit_img_3.png" width="70%" /><br/>
				<p-checkbox name="group1" value="3" label="옆구리 살이 비어져 나온다." [(ngModel)]='selectedFit'></p-checkbox><br/>
			</div>
			<div class="ui-g-6">
				<img src="./resources/img/brafit_img_4.png" width="50%" /><br/>
				<p-checkbox name="group1" value="4" label="캡 위쪽이 빈다." [(ngModel)]='selectedFit'></p-checkbox><br/>
			</div>
			<div class="ui-g-6">
				<img src="./resources/img/brafit_img_5.png" width="50%" /><br/>
				<p-checkbox name="group1" value="5" label="캡 중간이 빈다." [(ngModel)]='selectedFit'></p-checkbox><br/>
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

export class BrafitComponent {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	selectedFit: number[] = [];

	goBack() {
		this.router.navigate(['/preferpad']);
	}

	goNext() {
		this.globals.brafitA = [];
		this.globals.brafitA = this.selectedFit;
		
		this.router.navigate(['/bandfit']);
	}

}
