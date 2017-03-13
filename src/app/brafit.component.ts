import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'brafit',
	template: `
		<h3>현재 브래지어의 피팅 상태는 어떤가요?</h3>
		<div class="ui-g" style="text-align: center">
			<div class="ui-g-4">
				<img src="./resources/img/brafit_img_1.png" width="200px" /><br/>
				<p-checkbox name="group1" value="잘 맞는다." label="잘 맞는다." [(ngModel)]="selectedFit"></p-checkbox><br/>
			</div>
			<div class="ui-g-4">
				<img src="./resources/img/brafit_img_2.png" width="200px" /><br/>
				<p-checkbox name="group1" value="캡 위로 가슴이 비어져 나온다." label="캡 위로 가슴이 비어져 나온다." [(ngModel)]='selectedFit'></p-checkbox><br/>
			</div>
			<div class="ui-g-4">
				<img src="./resources/img/brafit_img_3.png" width="200px" /><br/>
				<p-checkbox name="group1" value="옆구리 살이 비어져 나온다." label="옆구리 살이 비어져 나온다." [(ngModel)]='selectedFit'></p-checkbox><br/>
			</div>
			<div class="ui-g-6">
				<img src="./resources/img/brafit_img_4.png" width="200px" /><br/>
				<p-checkbox name="group1" value="캡 위쪽이 빈다." label="캡 위쪽이 빈다." [(ngModel)]='selectedFit'></p-checkbox><br/>
			</div>
			<div class="ui-g-6">
				<img src="./resources/img/brafit_img_5.png" width="200px" /><br/>
				<p-checkbox name="group1" value="캡 중간이 빈다." label="캡 중간이 빈다." [(ngModel)]='selectedFit'></p-checkbox><br/>
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
		private router: Router
	) {}

	selectedFit: string[] = [];

	goBack() {
		this.router.navigate(['/pad']);
	}

	goNext() {
		this.router.navigate(['/bandfit']);
	}

}
