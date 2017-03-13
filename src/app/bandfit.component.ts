import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'bandfit',
	template: `
		<h3>브라 밴드의 피팅 상태는 어떤가요?</h3>
		<div class="ui-g" style="margin-bottom:10px; text-align: center">
			<div class="ui-g-12">
				<img src="./resources/img/bandfit_img_1.png" /><br/>
				<p-checkbox name="group1" value="잘 맞는다." label="잘 맞는다." [(ngModel)]="selectedBand"></p-checkbox>
			</div>
			<div class="ui-g-12">
				<img src="./resources/img/bandfit_img_2.png" /><br/>
				<p-checkbox name="group1" value="너무 타이트해서 불편하다." label="너무 타이트해서 불편하다." [(ngModel)]="selectedBand"></p-checkbox>
			</div>
			<div class="ui-g-12">
				<img src="./resources/img/bandfit_img_3.png" /><br/>
				<p-checkbox name="group1" value="살짝 루즈해서 자꾸 올라간다." label="살짝 루즈해서 자꾸 올라간다." [(ngModel)]="selectedBand"></p-checkbox>
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
		private router: Router
	) {}

	selectedBand: string[] = [];

	goBack() {
		this.router.navigate(['/brafit']);
	}

	goNext() {
		this.router.navigate(['/bustsize']);
	}

}
