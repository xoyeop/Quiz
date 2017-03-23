import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Globals } from './globals';

@Component({
	selector: 'way',
	template: `
		<h3>비나제이를 알게된 경로를 선택해 주세요.</h3>
		<div class="ui-g" style="margin-bottom:10px">
			<div class="ui-g-3"><p-radioButton name="group1" value="naversearch" label="네이버 키워드 검색" [(ngModel)]="selectedWay"></p-radioButton></div>
			<div class="ui-g-3">검색하신 키워드는 무엇인가요?</div>
			<div class="ui-g-6"><input type="text" pInputText [(ngModel)]="nSearchKeyword" /></div>

			<div class="ui-g-3"><p-radioButton name="group1" value="naverblog" label="네이버 블로그" [(ngModel)]="selectedWay"></p-radioButton></div>
			<div class="ui-g-3">블로그 아이디를 알려주세요.</div>
			<div class="ui-g-6"><input type="text" pInputText [(ngModel)]="nBlogId" /></div>

			<div class="ui-g-3"><p-radioButton name="group1" value="insta" label="인스타그램의 일반인 착용샷" [(ngModel)]="selectedWay"></p-radioButton></div>
			<div class="ui-g-3">인스타그램 아이디를 알려주세요.</div>
			<div class="ui-g-6"><input type="text" pInputText [(ngModel)]="instaId" /></div>

			<div class="ui-g-12"><p-radioButton name="group1" value="vinajinsta" label="비나제이 인스타그램" [(ngModel)]="selectedWay"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value="vinajfb" label="비나제이 페이스북" [(ngModel)]="selectedWay"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value="friend" label="지인소개" [(ngModel)]="selectedWay"></p-radioButton></div>
			<div class="ui-g-12"><p-radioButton name="group1" value="etc" label="기타" [(ngModel)]="selectedWay"></p-radioButton></div>
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
		private router: Router,
		private globals: Globals
	) {}

	selectedWay: string = "naversearch";

	nSearchKeyword: string = null;
	nBlogId: string = null;
	instaId: string = null;

	goBack() {
		
		this.router.navigate(['/material']);
	}

	goNext() {
		this.globals.wayA = null;
		this.globals.wayA = this.selectedWay;

		this.globals.wayIn = null;
		if (this.selectedWay == "naversearch") {
			this.globals.wayIn = this.nSearchKeyword;
		} else if (this.selectedWay == "naverblog") {
			this.globals.wayIn = this.nBlogId;
		} else if (this.selectedWay == "insta") {
			this.globals.wayIn = this.instaId;
		}

		this.router.navigate(['/user']);
	}

}
