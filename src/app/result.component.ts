import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from './app.service';

import { Globals } from './globals';

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
		const upper: number = this.globals.upperSize;
		const under: number = this.globals.underSize;

		const brafit: number[] = this.globals.brafitA;
		const bandfit: number[] = this.globals.bandfitA;

		const bustsize: string = this.globals.bustsizeA;
		const shoulder: number = this.globals.shoulderA;
		
		const data: any[] = [];

		data.push({ 
			upper: upper,
			under: under,
			brafit: brafit,
			bandfit: bandfit,
			bustsize: bustsize,
			shoulder: shoulder
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

	findBraSize(cup: number, under: number, brafit: number[], bnadfit: number[]) {
		if ( under >= 600 && 650 >= under ) {
			if ( cup >= 100 && 120 >= cup ) this.bra = "65B";
			else if ( 140 >= cup ) this.bra = "65C";
			else if ( 160 >= cup ) this.bra = "65D";
			else if ( 180 >= cup ) this.bra = "65E";
			else if ( 200 >= cup ) this.bra = "65F";
			else if ( 220 >= cup ) this.bra = "65G";
			else if ( 240 >= cup ) this.bra = "65H";
			else if ( 260 >= cup ) this.bra = "65I";
		}
		else if ( 700 >= under ) {
			if ( cup >= 800 && 100 >= cup ) this.bra = "70A";
			else if ( 120 >= cup ) this.bra = "70B";
			else if ( 140 >= cup ) this.bra = "70C";
			else if ( 160 >= cup ) this.bra = "70D";
			else if ( 180 >= cup ) this.bra = "70E";
			else if ( 200 >= cup ) this.bra = "70F";
			else if ( 220 >= cup ) this.bra = "70G";
			else if ( 240 >= cup ) this.bra = "70H";
		}
		else if ( 750 >= under ) {
			if ( cup >= 80 && 100 >= cup ) this.bra = "75A";
			else if ( 120 >= cup ) this.bra = "75B";
			else if ( 140 >= cup ) this.bra = "75C";
			else if ( 160 >= cup ) this.bra = "75D";
			else if ( 180 >= cup ) this.bra = "75E";
			else if ( 200 >= cup ) this.bra = "75F";
			else if ( 220 >= cup ) this.bra = "75G";
			else if ( 240 >= cup ) this.bra = "75H";
		}	
		else if ( 800 >= under ) {
			if ( cup >= 80 && 100 >= cup ) this.bra = "80A";
			else if ( 120 >= cup ) this.bra = "80B";
			else if ( 140 >= cup ) this.bra = "80C";
			else if ( 160 >= cup ) this.bra = "80D";
			else if ( 180 >= cup ) this.bra = "80E";
			else if ( 200 >= cup ) this.bra = "80F";
			else if ( 220 >= cup ) this.bra = "80G";
			else if ( 240 >= cup ) this.bra = "80H";
		}
		else if ( 850 >= under ) {
			if ( cup >= 80 && 100 >= cup ) this.bra = "85A";
			else if ( 120 >= cup ) this.bra = "85B";
			else if ( 140 >= cup ) this.bra = "85C";
			else if ( 160 >= cup ) this.bra = "85D";
			else if ( 180 >= cup ) this.bra = "85E";
			else if ( 200 >= cup ) this.bra = "85F";
			else if ( 220 >= cup ) this.bra = "85G";
			else if ( 240 >= cup ) this.bra = "85H";
		}
		else {
			this.bra = "No Size";
		}

		if (brafit.includes(2) || brafit.includes(3)) {
			const tmp_b: string = this.bra.substr(0,2);
			const tmp_c: string = this.bra.substr(2,1);
			console.log("tmp", tmp_c);

			if (tmp_c == "A") this.bra = tmp_b + "B";
			else if (tmp_c == "B") this.bra = tmp_b + "C";
			else if (tmp_c == "C") this.bra = tmp_b + "D";
			else if (tmp_c == "D") this.bra = tmp_b + "E";
			else if (tmp_c == "E") this.bra = tmp_b + "F";
			else if (tmp_c == "F") this.bra = tmp_b + "G";
			else if (tmp_c == "G") this.bra = tmp_b + "H";
		}
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
