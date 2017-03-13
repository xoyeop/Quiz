import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SelectItem } from 'primeng/primeng';

@Component({
	selector: 'others',
	template: `
		<h3>가장 편안하게 맞는 브라의 브랜드명과 사이즈를 선택해주세요.</h3>
		<div class="ui-g">
			<div class="ui-g-3">브랜드명:</div>
			<div class="ui-g-9"><p-dropdown [options]="oproducts" ></p-dropdown></div>
			<div class="ui-g-3">Bra Size: </div>
			<div class="ui-g-9">
				<p-dropdown [options]="obusts" ></p-dropdown>
				<p-dropdown [options]="ocups"></p-dropdown>
			</div>
		</div>

		<br/>
		<button pButton type="button" (click)="goBack()"  label="BACK"></button>
		<button pButton type="button" (click)="goNext()" label="NEXT QUESTION"></button>

		<br/>
	`,
	styles: [`
	`]
})

export class OthersComponent {
	oproducts: SelectItem[] = [];
	obusts: SelectItem[] = [];
	ocups: SelectItem[] = [];

	selectedProduct: string = null;
	selectedBust: string = null;
	selectedCup: string = null;

	constructor(
		private router: Router
	) {

		this.oproducts = [];
		this.oproducts.push({label: 'Select Product', value: null});
		this.oproducts.push({label: '비너스', value: {id:1, name: '아이코닉', code: 'IC'}});
		this.oproducts.push({label: '비비안', value: {id: 2, name: '로고온', code: 'LO'}});
		this.oproducts.push({label: '원더브라', value: {id: 3, name: '저중심', code: 'LC'}});
		this.oproducts.push({label: '빅토리아시크릿', value: {id: 4, name: '저중심', code: 'LC'}});
		this.oproducts.push({label: '솔브', value: {id: 5, name: '저중심', code: 'LC'}});
		this.oproducts.push({label: '게스언더웨어', value: {id: 6, name: '저중심', code: 'LC'}});
		this.oproducts.push({label: '에메필', value: {id: 7, name: '저중심', code: 'LC'}});
		this.oproducts.push({label: '캘빈클라인', value: {id: 8, name: '저중심', code: 'LC'}});
		this.oproducts.push({label: '코데즈컴바인', value: {id: 9, name: '저중심', code: 'LC'}});
		this.oproducts.push({label: '에블린', value: {id: 10, name: '저중심', code: 'LC'}});
		this.oproducts.push({label: '기타', value: {id: 11, name: '저중심', code: 'LC'}});
	








		this.obusts = [];
		this.obusts.push({label: '65', value: {id: 1, code: '65'}});
		this.obusts.push({label: '70', value: {id: 2, code: '70'}});
		this.obusts.push({label: '75', value: {id: 3, code: '75'}});
		this.obusts.push({label: '80', value: {id: 4, code: '80'}});
		this.obusts.push({label: '85', value: {id: 5, code: '85'}});
		this.obusts.push({label: '90', value: {id: 6, code: '90'}});

		this.ocups = [];
		this.ocups.push({label: 'A', value: {id: 1, code: 'A'}});
		this.ocups.push({label: 'B', value: {id: 2, code: 'B'}});
		this.ocups.push({label: 'C', value: {id: 3, code: 'C'}});
		this.ocups.push({label: 'D', value: {id: 4, code: 'D'}});
		this.ocups.push({label: 'E', value: {id: 5, code: 'E'}});
	}

	goBack() {
		this.router.navigate(['/shoulder']);
	}

	goNext() {
		this.router.navigate(['/vsothers']);
	}


}
