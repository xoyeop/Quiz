import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'user',
	template: `
		<h3>기본 정보를 입력해 주세요.</h3>
		<div class="ui-g">
			<div class="ui-g-3">거주하는 지역: </div>
			<div class="ui-g-9"><input type="text" pInputText /></div>
			<div class="ui-g-3">나이: </div>
			<div class="ui-g-9"><input type="text" pInputText /></div>
		</div>
		<br/>
		<button pButton type="button" (click)="goBack()" label="BACK"></button>
		<button pButton type="button" (click)="goNext()" label="NEXT QUESTION"></button>

		<br/>
	`,
	styles: [`
	`]
})

export class UserComponent {
	constructor(
		private router: Router
	) {}
	
	goBack() {
		this.router.navigate(['/way']);
	}

	goNext() {
		this.router.navigate(['/result']);
	}
}
