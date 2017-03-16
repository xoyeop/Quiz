import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Globals } from './globals';

@Component({
	selector: 'color',
	template: `
		<h3>좋아하는 속옷컬러를 선택해 주세요.</h3>
		<div class="ui-g" style="margin-bottom:10px">
			<div class="ui-g-12"><p-checkbox name="group1" value="black" label="블랙" [(ngModel)]="selectedColor"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="white" label="화이트" [(ngModel)]="selectedColor"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="skin" label="스킨톤 (살색/베이지/아이보리 등)" [(ngModel)]="selectedColor"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="pastel" label="파스텔톤 (연핑크/연블루 등)" [(ngModel)]="selectedColor"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="vivid" label="비비드컬러 (레드/블루/핫핑크 등)" [(ngModel)]="selectedColor"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="print" label="프린트물 (체크/레오파드/꽃무늬 등)" [(ngModel)]="selectedColor"></p-checkbox></div>
		</div>

		<br/>
		<button pButton type="button" (click)="goBack()" label="BACK"></button>
		<button pButton type="button" (click)="goNext()" label="NEXT QUESTION"></button>

		<br/>
	`,
	styles: [`
	`]
})

export class ColorComponent {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	selectedColor: string[] = [];

	goBack() {
		this.router.navigate(['/prefer']);
	}

	goNext() {
		this.globals.colorA = [];
		this.globals.colorA = this.selectedColor;

		this.router.navigate(['/material']);
	}

}
