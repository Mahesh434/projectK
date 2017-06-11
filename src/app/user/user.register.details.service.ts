import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {IUserPrefs} from './user-pref';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserRegisterDetailsService {
    private _url = 'api/user/predFields.json';

    constructor(private _http: Http) {

    }

    getRegistrationDetails(): Observable<IUserPrefs> {
        return this._http.get(this._url)
            .map((response: Response) => <IUserPrefs>response.json())
            //.do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(`Error ${error}`);
        return Observable.throw(error.json().error || 'Server Error');
    }
}