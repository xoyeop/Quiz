import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SelectItem } from 'primeng/primeng';

import { VProd } from './const/vprod';

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
	selectedBust: number;
	selectedCup: string;

	constructor(
		private router: Router,
	) {

		this.products = [];
		this.products.push({ label: '아이코닉', value: 'iconic' });
		this.products.push({ label: '로고온', value: 'logoon'});
		this.products.push({ label: '저중심', value: 'low' });

		this.busts = [];
		this.busts.push({ label: '65', value: 65 });
		this.busts.push({ label: '70', value: 70 });
		this.busts.push({ label: '75', value: 75 });
		this.busts.push({ label: '80', value: 80 });
		this.busts.push({ label: '85', value: 85 });
		this.busts.push({ label: '90', value: 90 });

		this.cups = [];
		this.cups.push({label: 'A', value: 'A'});
		this.cups.push({label: 'B', value: 'B'});
		this.cups.push({label: 'C', value: 'C'});
		this.cups.push({label: 'D', value: 'D'});
		this.cups.push({label: 'E', value: 'E'});
		this.cups.push({label: 'F', value: 'F'});
	}

	goBack() {
		this.router.navigate(['/start']);
	}

	goNext() {
		console.log(this.selectedProduct);

		this.router.navigate(['/size']);
	}


}
