import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pk-salary',
    moduleId: module.id.toString(),
    templateUrl: 'salary.component.html',
    styleUrls: ['salary.component.css']
})
export class SalaryComponent {  

    @Output() salaryChanged: EventEmitter<string> = new EventEmitter<string>();

    salary: number;

    sliderChanged(sliderValue: string): void {
        this.salary = Math.round(Number(sliderValue));
        this.salaryChanged.emit('' + this.salary);
    }
}