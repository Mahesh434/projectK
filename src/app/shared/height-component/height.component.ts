import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pk-height',
    moduleId: module.id.toString(),
    templateUrl: 'height.component.html',
    styleUrls: ['height.component.css']
})
export class HeightComponent implements OnChanges {

    heightInCM: string;
    heightInInch: string;
    heightInFtInch: string;
    displayHeightInCM : boolean = true;

    @Output() heigtChanged: EventEmitter<string> = new EventEmitter<string>();

    sliderChanged(sliderValue: string): void {
        let height: number = Number(sliderValue);

        this.heightInCM = Math.round(height) + 'cm';
        this.heightInInch = Math.round(height / 2.54) + 'inch';
        let ftFt = Math.floor(height / 30.48);
        let ftInches = Math.round((height % 30.48) / 2.54);
        if (ftInches >= 12) {
            ftFt++;
            ftInches = 0;
        }
        this.heightInFtInch = ftFt + ' ft ' + ftInches + ' in';
        this.heigtChanged.emit('' + this.heightInCM);
    }

    toggleSwitched(toggleValue: string): void{        
        this.displayHeightInCM = !this.displayHeightInCM;
    }




    //Angualr Life Cycle Hooks
    ngOnChanges(): void {

    }

    ngOnInit(): void {
        //this.pkHeightSlider('pk-height-slider', this);
    }

}