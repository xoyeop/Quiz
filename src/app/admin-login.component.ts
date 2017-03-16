import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Globals } from './globals';

import { InputTextModule, ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'admin-login',
	template: `
		<h3>비밀번호를 입력해 주세요.</h3>
		Password: <input type="password" pInputText [(ngModel)]="passwd" />
		<br/><br/>
		<button pButton type="button" (click)="goBack()" label="BACK"></button>
		<button pButton type="button" (click)="goNext()" label="LOGIN"></button>

		<br/>
	`,
	styles: [`
	`]
})

export class AdminLoginComponent {
	constructor(
		private router: Router,
		private globals: Globals
	) {}

	passwd: string = null;
	
	goBack() {
		this.router.navigate(['/start']);
	}

	goNext() {
		if (this.passwd == "vinaj")
			this.router.navigate(['/admin-browse']);
	}
}	
