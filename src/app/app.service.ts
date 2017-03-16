import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
	private baseUrl = "http://192.168.179.129/quiz_writer.php";

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor (
		private http: Http
	){}

	saveQuiz(quiz: any[]): Promise<void> {
		console.log(JSON.stringify(quiz));
		return this.http
			.post (this.baseUrl
				, JSON.stringify(quiz)
				, { headers: this.headers })
			.toPromise()
			.then (res => {
				console.log("eeee", res);
			})
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('error!!', error);

		return Promise.reject(error.message || error);
	}
}
