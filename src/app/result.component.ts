import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from './app.service';

import { Globals } from './globals';
import { VPROD } from './const/vprod';
import { USER } from './const/user';
import { VSPROD } from './const/vsprod';

@Component({
	selector: 'result',
	template: `
		<h3>테스트 결과</h3>
		<h2>{{bra}}</h2>
		<p>{{bustpad}}<br/>
		{{shoulder}}</p>
		<br/>
		<button pButton type='button' (click)='onClick()' label='처음으로'></button>
		<button pButton type='button' (click)='save()' label='SAVE'></button>
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
		private globals: Globals,
		private service: AppService
	) {}

	bra: string = null;
	bustpad: string = null;
	shoulder: string = null;
	
	onClick() {
		this.router.navigate(['/start']);
	}

	save() {
		const vprod: VPROD = this.globals.vinaProduct;

		const upper: number = this.globals.upperSize;
		const under: number = this.globals.underSize;

		const pad: number = this.globals.padSize;
		const preferPad: number = this.globals.preferPadSize;

		const brafit: number[] = this.globals.brafitA;
		const bandfit: number[] = this.globals.bandfitA;

		const bustsize: string = this.globals.bustsizeA;
		const shoulder: number = this.globals.shoulderA;

		const others: VSPROD = this.globals.otherProd;

		const prefer: number = this.globals.preferA;
		const color: string[] = this.globals.colorA;
		const material: string[] = this.globals.materialA;
		
		const way: string = this.globals.wayA;
		const wayIn: string = this.globals.wayIn;

		const user: USER = this.globals.userA;
		
		const data: any[] = [];

		data.push({ 
			vinaProduct: vprod,
			upper: upper,
			under: under,
			padsize: pad,
			preferPadSize: preferPad,
			brafit: brafit,
			bandfit: bandfit,
			bustsize: bustsize,
			shoulder: shoulder,
			otherProduct: others,
			prefer: prefer,
			color: color,
			material: material,
			way: way,
			wayIn: wayIn,
			user: user,
		});

		this.service.saveQuiz(data)
			.then(()=>{
				console.log(data);
		});
	}
	
	ngOnInit(): void {
		const upper: number = this.globals.upperSize;
		const under: number = this.globals.underSize;

		const brafit: number[] = this.globals.brafitA; 
		const bandfit: number[] = this.globals.bandfitA;

		var cup = (upper - under);
		this.findBraSize(cup, under, brafit, bandfit);

		const bustsize: string = this.globals.bustsizeA;
		this.findBustPad(bustsize);

		const shoulder: number = this.globals.shoulderA;
		this.findShoulder(shoulder);
	}

	findBraSize(cup: number, under: number, brafit: number[], bandfit: number[]) {
		const sizeArr: string[] = [];
		sizeArr[0] = ["65AA", "65A", "65B", "65C", "65D", "65DE", "65F", "65G", "65H", "65I"];
		sizeArr[1] = ["No Size", "70AA", "70A", "70B", "70C", "70D", "70E", "70F", "70G", "70H"];
		sizeArr[2] = ["No Size", "No Size", "75AA", "75A", "75B", "75C", "75D", "75E", "75F", "75G"];
		sizeArr[3] = ["No Size", "No Size", "No Size", "80AA", "80A", "80B", "80C", "80D", "80E", "80F"];
		sizeArr[4] = ["No Size", "No Size", "No Size", "No Size", "85AA", "85A", "85B", "85C", "85D", "85E"];
		sizeArr[5] = ["No Size", "No Size", "No Size", "No Size", "No Size", "90AA", "90A", "90B", "90C", "90D"];

		const braIndex: number = 5;
		const cupIndex: number = 0;

		if ( under >= 600 && 650 >= under ) {
			braIndex = 0;

			if ( cup >= 100 && 120 >= cup ) cupIndex = 2;
			else if ( 140 >= cup ) cupIndex = 3;
			else if ( 160 >= cup ) cupIndex = 4;
			else if ( 180 >= cup ) cupIndex = 5;
			else if ( 200 >= cup ) cupIndex = 6;
			else if ( 220 >= cup ) cupIndex = 7;
			else if ( 240 >= cup ) cupIndex = 8;
			else if ( 260 >= cup ) cupIndex = 9;
		}
		else if ( 700 >= under ) {
			braIndex = 1;

			if ( cup >= 800 && 100 >= cup ) cupIndex = 2;
			else if ( 120 >= cup ) cupIndex = 3;
			else if ( 140 >= cup ) cupIndex = 4;
			else if ( 160 >= cup ) cupIndex = 5;
			else if ( 180 >= cup ) cupIndex = 6;
			else if ( 200 >= cup ) cupIndex = 7;
			else if ( 220 >= cup ) cupIndex = 8;
			else if ( 240 >= cup ) cupIndex = 9;
		}
		else if ( 750 >= under ) {
			braIndex = 2;

			if ( cup >= 80 && 100 >= cup ) cupIndex = 3;
			else if ( 120 >= cup ) cupIndex = 4;
			else if ( 140 >= cup ) cupIndex = 5;
			else if ( 160 >= cup ) cupIndex = 6;
			else if ( 180 >= cup ) cupIndex = 7;
			else if ( 200 >= cup ) cupIndex = 8;
			else if ( 220 >= cup ) cupIndex = 9;
		}	
		else if ( 800 >= under ) {
			braIndex = 3;

			if ( cup >= 80 && 100 >= cup ) cupIndex = 4;
			else if ( 120 >= cup ) cupIndex = 5;
			else if ( 140 >= cup ) cupIndex = 6;
			else if ( 160 >= cup ) cupIndex = 7;
			else if ( 180 >= cup ) cupIndex = 8;
			else if ( 200 >= cup ) cupIndex = 9;
		}
		else if ( 850 >= under ) {
			braIndex = 4;

			if ( cup >= 80 && 100 >= cup ) cupIndex = 5;
			else if ( 120 >= cup ) cupIndex = 6;
			else if ( 140 >= cup ) cupIndex = 7;
			else if ( 160 >= cup ) cupIndex = 8;
			else if ( 180 >= cup ) cupIndex = 9;
		}
		else if ( 900 >= under ) {
			braIndex = 5;

			if ( cup >= 80 && 100 >= cup ) cupIndex = 6;
			else if ( 120 >= cup ) cupIndex = 7;
			else if ( 140 >= cup ) cupIndex = 8;
			else if ( 160 >= cup ) cupIndex = 9;
		}

		const tmpCup: number = cupIndex;
		const tmpBra: number = braIndex;

		if (brafit != null) {
			if (brafit.indexOf("2") != -1 || brafit.indexOf("3") != -1) {
				tmpCup++;
			}

			if (brafit.indexOf("4") != -1) {
				tmpCup--;
			}
		}

		if (bandfit != null ) {
			if (bandfit.indexOf("2") != -1) {
				tmpBra++;
			}

			if (bandfit.indexOf("3") != -1) {
				tmpBra--;
			}
		}

		if (tmpCup >= 0 || tmpCup < 10) cupIndex = tmpCup;
		if (tmpBra >= 0 || tmpBra < 6) braIndex = tmpBra;

		this.bra = sizeArr[braIndex][cupIndex];
	}
	
	findBustPad(bustsize: string) {
		if (bustsize == "bustLeft") this.bustpad = "오른쪽 가슴에 적당한 패드를 대세요.";
		else if (bustsize == "bustRight") this.bustpad = "왼쪽 가슴에 적당한 패드를 대세요.";
		else this.bustpad = "";
	}

	findShoulder(shoulder: number) {
		if (shoulder == 1) this.shoulder = "";
		else if (shoulder == 2) this.shoulder = "어깨끈을 늘려주세요.";
		else if (shoulder == 3) this.shoulder = "흘러내리는 쪽의 어깨끈을 줄여주세요.";
		else this.shoulder = "";
	}
}
