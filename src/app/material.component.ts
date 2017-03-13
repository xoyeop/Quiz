import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'material',
	template: `
		<h3>좋아하는 속옷의 소재 및 장식 디테일을 선택해 주세요.</h3>
		<div class="ui-g" style="margin-bottom:10px">
			<div class="ui-g-12"><p-checkbox name="group1" value="잘 맞는다." label="광택없는 베이직 소재" [(ngModel)]="selectedMaterial"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="캡 위로 가슴이 비어져 나온다." label="광택있는 베이직 소재" [(ngModel)]="selectedMaterial"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="옆구리 살이 비어져 나온다." label="레이스 소재" [(ngModel)]="selectedMaterial"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="캡 위쪽이 빈다." label="시스루 소재" [(ngModel)]="selectedMaterial"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="캡 중간이 빈다." label="자수" [(ngModel)]="selectedMaterial"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="캡 중간이 빈다." label="리본" [(ngModel)]="selectedMaterial"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="캡 중간이 빈다." label="스트랩" [(ngModel)]="selectedMaterial"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="캡 중간이 빈다." label="기타" [(ngModel)]="selectedMaterial"></p-checkbox></div>
		</div>
		<br/>
		<button pButton type="button" (click)="goBack()" label="BACK"></button>
		<button pButton type="button" (click)="goNext()" label="NEXT QUESTION"></button>

		<br/>
	`,
	styles: [`
	`]
})

export class MaterialComponent {
	constructor(
		private router: Router
	) {}

	selectedMateria: string[] = [];

	goBack() {
		this.router.navigate(['/color']);
	}

	goNext() {
		this.router.navigate(['/way']);
	}

}
