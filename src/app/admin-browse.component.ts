import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Globals } from './globals';
import { AppService } from './app.service';

import { InputTextModule, ButtonModule } from 'primeng/primeng';

@Component({
	selector: 'admin-browse',
	template: `
		<h3>비밀번호를 입력해 주세요.</h3>
		<br/><br/>

		<br/>
	`,
	styles: [`
	`]
})

export class AdminBrowseComponent {
	constructor(
		private router: Router,
		private globals: Globals,
		private service: AppService
	) {}

}
