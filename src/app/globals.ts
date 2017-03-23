import { Injectable } from '@angular/core';

import { VPROD } from './const/vprod';
import { USER } from './const/user';
import { VSPROD } from './const/vsprod';

@Injectable()
export class Globals {
	vinaProduct: VPROD;
	
	underSize: number;
	upperSize: number;

	padSize: number;
	preferPadSize: number;

	brafitA: number[];
	bandfitA: number[];

	bustsizeA: string;
	shoulderA: number;

	otherProd: VSPROD;

	preferA: number;
	colorA: string[];
	materialA: string[];

	wayA: string;
	wayIn: string;

	userA: USER;
}
