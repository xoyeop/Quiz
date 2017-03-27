import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Globals } from './globals';

@Component({
	selector: 'material',
	template: `
		<h3>좋아하는 속옷의 소재 및 장식 디테일을 선택해 주세요.</h3>
		<div class="ui-g" style="margin-bottom:10px">
			<div class="ui-g-12"><p-checkbox name="group1" value="glossbasic" label="광택없는 베이직 소재" [(ngModel)]="selectedMaterial"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="noglossbasic" label="광택있는 베이직 소재" [(ngModel)]="selectedMaterial"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="lace" label="레이스 소재" [(ngModel)]="selectedMaterial"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="seethrough" label="시스루 소재" [(ngModel)]="selectedMaterial"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="needlework" label="자수" [(ngModel)]="selectedMaterial"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="ribbon" label="리본" [(ngModel)]="selectedMaterial"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="strap" label="스트랩" [(ngModel)]="selectedMaterial"></p-checkbox></div>
			<div class="ui-g-12"><p-checkbox name="group1" value="etc" label="기타" [(ngModel)]="selectedMaterial"></p-checkbox></div>
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
		private router: Router,
		private globals: Globals
	) {}

	selectedMaterial: string[] = [];

	goBack() {
		this.router.navigate(['/color']);
	}

	goNext() {
		this.globals.materialA = [];
		this.globals.materialA = this.selectedMaterial;
		console.log(this.globals.materialA);

		this.router.navigate(['/way']);
	}

}
