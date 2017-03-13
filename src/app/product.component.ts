import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SelectItem } from 'primeng/primeng';

@Component({
	selector: 'product',
	template: `
		<h3>구매 경험이 있는 VinaJ의 상품명을 입력해 주세요.</h3>
		<div class="ui-g">
			<div class="ui-g-3">Product Name:</div>
			<div class="ui-g-9">
				<p-dropdown [options]="products" [(ngModel)]="selectedProduct" ></p-dropdown>
			</div>
			<div class="ui-g-3">Bra Size:</div>
			<div class="ui-g-9">
				<p-dropdown [options]="busts" [(ngModel)]="selectedBust"></p-dropdown>
				<p-dropdown [options]="cups" [(ngModel)]="selectedCup"></p-dropdown>
			</div>
		</div>

		<br/>
		<div class="ui-g">
			<div class="ui-g-3">
				<button pButton type="button" (click)="goBack()"  label="BACK"></button>
			</div>
			<div class="ui-g-6">
				<button pButton type="button" (click)="goNext()" label="NEXT QUESTION"></button>
			</div>
		</div>

		<br/>
	`,
	styles: [`
	`]
})

export class ProductComponent {
	products: SelectItem[] = [];
	busts: SelectItem[] = [];
	cups: SelectItem[] = [];

	selectedProduct: string;
	selectedBust: string;
	selectedCup: string;

	constructor(
		private router: Router
	) {

		this.products = [];
		this.products.push({label: 'Select Product', value: null});
		this.products.push({label: '아이코닉', value: {id:1, name: '아이코닉', code: 'IC'}});
		this.products.push({label: '로고온', value: {id: 2, name: '로고온', code: 'LO'}});
		this.products.push({label: '저중심', value: {id: 3, name: '저중심', code: 'LC'}});

		this.busts = [];
		this.busts.push({label: '65', value: {id: 1, code: '65'}});
		this.busts.push({label: '70', value: {id: 2, code: '70'}});
		this.busts.push({label: '75', value: {id: 3, code: '75'}});
		this.busts.push({label: '80', value: {id: 4, code: '80'}});
		this.busts.push({label: '85', value: {id: 5, code: '85'}});
		this.busts.push({label: '90', value: {id: 6, code: '90'}});

		this.cups = [];
		this.cups.push({label: 'A', value: {id: 1, code: 'A'}});
		this.cups.push({label: 'B', value: {id: 2, code: 'B'}});
		this.cups.push({label: 'C', value: {id: 3, code: 'C'}});
		this.cups.push({label: 'D', value: {id: 4, code: 'D'}});
		this.cups.push({label: 'E', value: {id: 5, code: 'E'}});
	}

	goBack() {
		this.router.navigate(['/start']);
	}

	goNext() {
		this.router.navigate(['/size']);
	}


}
