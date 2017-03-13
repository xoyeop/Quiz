import { NgModule }      from '@angular/core';
import { RouterModule }				 from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ButtonModule,
					SelectItem,
					DropdownModule,
					InputTextModule,
					CheckboxModule,
					RadioButtonModule,
				}  from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';

import { Globals } from './globals'

import { AppComponent }  from './app.component';
import { StartComponent } from './start.component';
import { ProductComponent } from './product.component';
import { SizeComponent } from './size.component';
import { PadComponent } from './pad.component';
import { BrafitComponent } from './brafit.component';
import { BandfitComponent } from './bandfit.component';
import { BustSizeComponent } from './bustsize.component';
import { ShoulderComponent } from './shoulder.component';
import { OthersComponent } from './others.component';
import { VsOthersComponent } from './vsothers.component';
import { PreferComponent } from './prefer.component';
import { ColorComponent } from './color.component';
import { MaterialComponent } from './material.component';
import { WayComponent } from './way.component';
import { UserComponent } from './user.component';
import { ResultComponent } from './result.component';

@NgModule({
  imports:      [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		ButtonModule,
		RouterModule.forRoot([]),
		DropdownModule,
		InputTextModule,
		CheckboxModule,
		RadioButtonModule,
	],
  declarations: [ 
		AppComponent,
		ProductComponent,
		StartComponent,
		SizeComponent,
		PadComponent,
		BrafitComponent,
		BandfitComponent,
		BustSizeComponent,
		ShoulderComponent,
		OthersComponent,
		VsOthersComponent,
		PreferComponent,
		ColorComponent,
		MaterialComponent,
		WayComponent,
		UserComponent,
		ResultComponent,
	],
	providers: [
		Globals,
	],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
