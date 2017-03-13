import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'way',
	template: `
		<h3>비나제이를 알게된 경로를 선택해 주세요.</h3>
		<div class="ui-g" style="margin-bottom:10px">
			<div class="ui-g-12"><p-radioButton name="group1" value="왼쪽가슴이 더 크다." label="네이버 키워드 검색"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value="오른쪽 가슴이 더 크다." label="네이버 블로그"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value="양쪽 가슴크기가 같다." label="비나제이 인스타그램"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value="양쪽 가슴크기가 같다." label="인스타그램의 일반인 착용샷"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value="양쪽 가슴크기가 같다." label="비나제이 페이스북"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value="양쪽 가슴크기가 같다." label="지인소개"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value="양쪽 가슴크기가 같다." label="기타"></p-radioButton></div>
		</div>

		<br/>
		<button pButton type="button" (click)="goBack()" label="BACK"></button>
		<button pButton type="button" (click)="goNext()" label="NEXT QUESTION"></button>

		<br/>
	`,
	styles: [`
	`]
})

export class WayComponent {
	constructor(
		private router: Router
	) {}

	goBack() {
		this.router.navigate(['/material']);
	}

	goNext() {
		this.router.navigate(['/user']);
	}

}
