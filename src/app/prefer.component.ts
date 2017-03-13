import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'prefer',
	template: `
		<h3>원하시는 취향의 브라는 무엇인가요?</h3>
		<div class="ui-g" style="margin-bottom:10px">
			<div class="ui-g-12"><p-radioButton name="group1" value="모르겠다." label="모르겠다."></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value="저중심 브라" label="저중심 브라"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value="3/4컵 브라" label="3/4컵 브라"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value="1/2컵 브라" label="1/2컵 브라"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value="Full컵 브라" label="Full컵 브라"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value="홑겹 브라" label="홑겹 브라"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value="노와이어 브라" label="노와이어 브라"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value="기타" label="기타"></p-radioButton></div>
		</div>
		<br/>
		<button pButton type="button" (click)="goBack()" label="BACK"></button>
		<button pButton type="button" (click)="goNext()" label="NEXT QUESTION"></button>

		<br/>
	`,
	styles: [`
	`]
})

export class PreferComponent {
	constructor(
		private router: Router
	) {}

	goBack() {
		this.router.navigate(['/vsothers']);
	}

	goNext() {
		this.router.navigate(['/color']);
	}

}
