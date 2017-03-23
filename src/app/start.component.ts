import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'start',
	template: `
		<img src="./resources/img/start_img.png" width="70%"/>
		<br/>
		<p>본 퀴즈 및 설문은 비나제이 브라를 구입하신 분들을 위한 것입니다.<br/>
		비나제이 피팅퀴즈를 통해 더욱 완벽한 브라 사이즈를 찾아보세요.</p>
		<br/>
		<button pButton type='button' (click)='onClick()' label='START' class="ui-button-danger"></button>
	`,
	styles: [`
		img, p, button {
			display: table;
			margin-left: auto;
			margin-right: auto;
			text-align: center;
		}
		.ui-button-danger {
			width: 350px;
			height: 50px;
			font-size: 30px;
			font-weight: bold;
		}
	`]
})

export class StartComponent {
	constructor(
		private router: Router
	) {}
	
	onClick() {
		this.router.navigate(['/product']);
	}

}
