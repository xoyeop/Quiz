import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SelectItem } from 'primeng/primeng';

import { Globals } from './globals';
import { VSPROD } from './const/vsprod';

@Component({
	selector: 'others',
	template: `
		<h3>가장 편안하게 맞는 브라의 브랜드명과 사이즈를 선택해주세요.</h3>
		<div class="ui-g">
			<div class="ui-g-3">브랜드명:</div>
			<div class="ui-g-9">
				<p-dropdown [options]="oproducts" [(ngModel)]="selectedProduct" ></p-dropdown>
				<input *ngIf="selectedProduct=='etc'" id="etcin" pInputText [(ngModel)]="etcin" />
			</div>
			<div class="ui-g-3">Bra Size: </div>
			<div class="ui-g-9">
				<p-dropdown [options]="obusts" [(ngModel)]="selectedBust" ></p-dropdown>
				<p-dropdown [options]="ocups" [(ngModel)]="selectedCup"></p-dropdown>
			</div>
		</div>

		<br/>

		<h4>선택하신 브랜드의 어떤 점이 편안하고 좋았나요?</h4>
		<input pInputText size="80" [(ngModel)]="othersin" />
		
		<br/><br/>
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

	selectedProduct: string = 'venus';
	selectedBust: number = 65;
	selectedCup: string = 'A';

	etcin: string = null;
	othersin: string = null;

	constructor(
		private router: Router,
		private globals: Globals
	) {

		this.oproducts = [];
		this.oproducts.push({label: '비너스', value: 'venus'});
		this.oproducts.push({label: '비비안', value: 'vivian'});
		this.oproducts.push({label: '원더브라', value: 'wonder'});
		this.oproducts.push({label: '빅토리아시크릿', value: 'victoria'});
		this.oproducts.push({label: '솔브', value: 'solb'});
		this.oproducts.push({label: '섹시쿠키', value: 'sexycookie'});
		this.oproducts.push({label: '와코루', value: 'wacoru'});
		this.oproducts.push({label: 'YES', value: 'yes'});
		this.oproducts.push({label: 'DAB', value: 'dab'});
		this.oproducts.push({label: '게스언더웨어', value: 'guess'});
		this.oproducts.push({label: '에메필 일반브라', value: 'aimer-basic'});
		this.oproducts.push({label: '에메필 초모리브라', value: 'aimer-cho'});
		this.oproducts.push({label: '캘빈클라인', value: 'calvin'});
		this.oproducts.push({label: '코데즈컴바인', value: 'codes'});
		this.oproducts.push({label: '에블린', value: 'eblin'});
		this.oproducts.push({label: '기타', value: 'etc'});

		this.obusts = [];
		this.obusts.push({label: '65', value: 65});
		this.obusts.push({label: '70', value: 70});
		this.obusts.push({label: '75', value: 75});
		this.obusts.push({label: '80', value: 80});
		this.obusts.push({label: '85', value: 85});
		this.obusts.push({label: '90', value: 90});

		this.ocups = [];
		this.ocups.push({label: 'A', value: 'A'});
		this.ocups.push({label: 'B', value: 'B'});
		this.ocups.push({label: 'C', value: 'C'});
		this.ocups.push({label: 'D', value: 'D'});
		this.ocups.push({label: 'E', value: 'E'});
	}

	goBack() {
		this.router.navigate(['/shoulder']);
	}

	goNext() {
		this.globals.otherProd = new VSPROD();

		if(this.selectedProduct == "etc") {
			this.globals.otherProd.name = this.selectedProduct + " : " + this.etcin;
		} else {
			this.globals.otherProd.name = this.selectedProduct;
		}
		this.globals.otherProd.bust = this.selectedBust;
		this.globals.otherProd.cup = this.selectedCup;
		this.globals.otherProd.good = this.othersin;

		this.router.navigate(['/vsothers']);
	}
}
