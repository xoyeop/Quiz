import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'shoulder',
	template: `
		<h3>어깨끈의 피팅 상태는 어떠한가요?</h3>
		<div class="ui-g" style="margin-bottom:10px; text-align:center">
			<div class="ui-g-12">
				<img src="./resources/img/shoulder_img_1.png" /><br/>
				<p-radioButton name="group1" value="잘 맞는다." label="잘 맞는다."></p-radioButton>
			</div>
			<div class="ui-g-12">
				<img src="./resources/img/shoulder_img_2.png" /><br/>
				<p-radioButton name="group1" value="타이트하다." label="타이트하다."></p-radioButton>
			</div>
			<div class="ui-g-12">
				<img src="./resources/img/shoulder_img_3.png" /><br/>
				<p-radioButton name="group1" value="흘러내린다." label="흘러내린다."></p-radioButton>
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
		private router: Router
	) {}

	goBack() {
		this.router.navigate(['/bustsize']);
	}

	goNext() {
		this.router.navigate(['/others']);
	}

}
