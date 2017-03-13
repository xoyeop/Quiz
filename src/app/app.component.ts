import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/primeng';

@Component({
  selector: 'my-app',
  template: `
		<div style='margin: 0 auto;'>
		<h1>VinaJ Fitting Quiz</h1>
		<router-outlet></router-outlet>
		</div>
	`,
})

export class AppComponent  { 
}
