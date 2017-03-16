import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/primeng';

@Component({
  selector: 'my-app',
  template: `
		<div style='margin: 0 auto;'>
			<div class="ui-g">
				<div class="ui-g-11">
					<h1>VinaJ Fitting Quiz</h1>
				</div>
				<div class="ui-g-1">
					<!--<button pButton type="button" (click)="goAdmin()" icon="fa-cog"></button>-->
				</div>
			<div>
			<router-outlet></router-outlet>
		</div>
	`,
})

export class AppComponent  { 
	constructor(
		private router: Router
	){}

	goAdmin() {
		this.router.navigate(['/admin-login']);
	}
}
