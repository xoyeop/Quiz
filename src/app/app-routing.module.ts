import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
	{ path: '', component: StartComponent, pathMatch: 'full' },
	{ path: 'start', component: StartComponent },
	{ path: 'product', component: ProductComponent},
	{ path: 'size', component: SizeComponent },
	{ path: 'pad', component: PadComponent },
	{ path: 'brafit', component: BrafitComponent },
	{ path: 'bandfit', component: BandfitComponent },
	{ path: 'bustsize', component: BustSizeComponent },
	{ path: 'shoulder', component: ShoulderComponent },
	{ path: 'others', component: OthersComponent },
	{ path: 'vsothers', component: VsOthersComponent },
	{ path: 'prefer', component: PreferComponent },
	{ path: 'color', component: ColorComponent },
	{ path: 'material', component: MaterialComponent },
	{ path: 'way', component: WayComponent },
	{ path: 'user', component: UserComponent },
	{ path: 'result', component: ResultComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}
