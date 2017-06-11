import { Component, OnInit } from '@angular/core';

import { IUser } from './user';
import { IUserPrefs } from './user-pref';
import { IKeyValue } from './key-value';
import { UserRegisterDetailsService } from './user.register.details.service';


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'user-registration.component.html',

    providers: [UserRegisterDetailsService]
})
export class UserRegistrationComponent implements OnInit {
    userDetails: IUser = {
        firstname: '',
        lastname: '',
        gender: '',
        email: '',
        dob: '',
        height: '',
        complexion: '',
        education: '',
        occupation: '',
        maritalstatus: '',
        paternalGotram: '',
        maternalGotram: '',
        star: '',
        rasi: '',
        aboutSelf: '',
        salary: '',
        mobileno: '',
        address: '',
        longitude: '',
        latitude: '',
        photoLink: '',
        videoLink: ''
    };

    userPrefs: IUserPrefs = {
        RASI: [],
        FAMILY_STATUS: [],
        FAMILY_TYPE: [],
        FAMILY_VALUES: [],
        MARITAL_STATUS: [],
        RELIGION: [],
        STAR: []
    };

    constructor(private _userRegisterDetailService: UserRegisterDetailsService) {

    }

    setHeight(height: string): void {
        this.userDetails.height = height;
    }

    setSalary(salary: string): void {
        this.userDetails.salary = salary;
    }

    setDDL(ddlValue: IKeyValue, type: string): void{
        this.userDetails[type] = ddlValue.key;
    }

    

    //Private Functions
    _registerDatePicker(): void {
        var userDetails = this.userDetails;
        $('#ur-dob').datepicker({
            format: 'mm/dd/yyyy',
            endDate: '1d',
            autoclose: true
        });

        $('#ur-dob').on('show', function (e) {
            userDetails.dob = $("#ur-dob").data('datepicker').getFormattedDate('mm/dd/yyyy');
        });

        $('#ur-dob').on('hide', function (e) {
            userDetails.dob = $("#ur-dob").data('datepicker').getFormattedDate('mm/dd/yyyy');
        });
    }


    registerUser(): void {
        console.log(this.userDetails);
        console.log(this.userPrefs);
    }

    ngOnInit(): void {
        this._registerDatePicker();
        this._userRegisterDetailService.getRegistrationDetails()
            .subscribe(userPref => this.userPrefs = userPref, error => console.log(error));
    }
}