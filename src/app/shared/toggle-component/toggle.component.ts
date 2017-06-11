import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pk-toggle',
    moduleId: module.id.toString(),
    templateUrl: 'toggle.component.html',
    styleUrls: ['toggle.component.css']
})
export class ToggleComponent {
    @Input()
    isToggleChecked: boolean = false;


    @Output() 
    toggleChanged: EventEmitter<string> = new EventEmitter<string>();

    toggleSwitched(): void {
        this.toggleChanged.emit(String(this.isToggleChecked));
    }
}