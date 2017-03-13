import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Globals } from './globals';

@Component({
	selector: 'result',
	template: `
		<h3>테스트 결과</h3>
		<h2>{{bra}}</h2>
		<p>어깨끈을 늘려 입으세요.<br/>
		왼쪽 가슴에 적당한 패드를 대세요.</p>
		<br/>
		<button pButton type='button' (click)='onClick()' label='처음으로'></button>
	`,
	styles: [`
		h3, h2, p, button {
			text-align: center;
		}
	`]
})

export class ResultComponent {

	constructor(
		private router: Router,
		private globals: Globals
	) {}

	bra: string = null;
	
	onClick() {
		this.router.navigate(['/start']);
	}
	
	ngOnInit(): void {
		const upper: number = this.globals.upperSize;
		const under: number = this.globals.underSize;

		var cup = (upper - under);
	
		if ( under >= 60 && 65 >= under ) {
			if ( cup >= 10 && 12 >= cup ) this.bra = "65B";
			else if ( 14 >= cup ) this.bra = "65C";
			else if ( 16 >= cup ) this.bra = "65D";
			else if ( 18 >= cup ) this.bra = "65E";
			else if ( 20 >= cup ) this.bra = "65F";
			else if ( 22 >= cup ) this.bra = "65G";
			else if ( 24 >= cup ) this.bra = "65H";
			else if ( 26 >= cup ) this.bra = "65I";
		}
		else if ( 70 >= under ) {
			if ( cup >= 8 && 10 >= cup ) this.bra = "70A";
			else if ( 12 >= cup ) this.bra = "70B";
			else if ( 14 >= cup ) this.bra = "70C";
			else if ( 16 >= cup ) this.bra = "70D";
			else if ( 18 >= cup ) this.bra = "70E";
			else if ( 20 >= cup ) this.bra = "70F";
			else if ( 22 >= cup ) this.bra = "70G";
			else if ( 24 >= cup ) this.bra = "70H";
		}
		else if ( 75 >= under ) {
			if ( cup >= 8 && 10 >= cup ) this.bra = "75A";
			else if ( 12 >= cup ) this.bra = "75B";
			else if ( 14 >= cup ) this.bra = "75C";
			else if ( 16 >= cup ) this.bra = "75D";
			else if ( 18 >= cup ) this.bra = "75E";
			else if ( 20 >= cup ) this.bra = "75F";
			else if ( 22 >= cup ) this.bra = "75G";
			else if ( 24 >= cup ) this.bra = "75H";
		}	
		else if ( 80 >= under ) {
			if ( cup >= 8 && 10 >= cup ) this.bra = "80A";
			else if ( 12 >= cup ) this.bra = "80B";
			else if ( 14 >= cup ) this.bra = "80C";
			else if ( 16 >= cup ) this.bra = "80D";
			else if ( 18 >= cup ) this.bra = "80E";
			else if ( 20 >= cup ) this.bra = "80F";
			else if ( 22 >= cup ) this.bra = "80G";
			else if ( 24 >= cup ) this.bra = "80H";
		}
		else if ( 85 >= under ) {
			if ( cup >= 8 && 10 >= cup ) this.bra = "85A";
			else if ( 12 >= cup ) this.bra = "85B";
			else if ( 14 >= cup ) this.bra = "85C";
			else if ( 16 >= cup ) this.bra = "85D";
			else if ( 18 >= cup ) this.bra = "85E";
			else if ( 20 >= cup ) this.bra = "85F";
			else if ( 22 >= cup ) this.bra = "85G";
			else if ( 24 >= cup ) this.bra = "85H";
		}
		else {
			this.bra = "No Size";
		}
		console.log(this.bra);
	}
}
