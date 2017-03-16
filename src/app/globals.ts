import { Injectable } from '@angular/core';

import { VPROD } from './const/vprod';
import { USER } from './const/user';

@Injectable()
export class Globals {
	vinaProduct: VPROD;
	
	underSize: number;
	upperSize: number;

	padSize: number;

	brafitA: number[];
	bandfitA: number[];

	bustsizeA: string;
	shoulderA: number;

	otherProd: VPROD;

	preferA: number;
	colorA: string[];
	materialA: string[];

	wayA: string;

	userA: USER;
}
