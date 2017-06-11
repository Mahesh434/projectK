import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
    selector: 'pk-slider',
    moduleId: module.id.toString(),
    templateUrl: 'slider.component.html',
    styleUrls: ['slider.component.css']
})
export class SliderComponent implements AfterViewInit {

    @Input()
    maxValue: number;
    @Input()
    sliderID: string;

    down: boolean = false;
    range: HTMLElement;
    dragger: HTMLElement;
    draggerWidth = 20;
    rangeWidth: number;
    rangeLeft: number;

    @Output() sliderChanged: EventEmitter<string> = new EventEmitter<string>();

    updateDragger(e: MouseEvent, from: string): void {
        if (this.down && e.pageX >= this.rangeLeft && e.pageX <= (this.rangeLeft + this.rangeWidth)) {
            if (from === 'fromDown') {
                this.dragger.style.transition = "left 0.5s";
            } else {
                this.dragger.style.transition = "none";
            }
            this.dragger.style.left = e.pageX - this.rangeLeft - this.draggerWidth + 'px';            
            let sliderValue: number = (((e.pageX - this.rangeLeft) / this.rangeWidth) * this.maxValue); 
            this.sliderChanged.emit(''+sliderValue);
        }
    }

    pkSlider(id: string, sliderComponent: SliderComponent): void { 
        this.range = document.getElementById(id);
        this.dragger = <HTMLElement>this.range.children[0];

        this.dragger.style.width = this.draggerWidth + 'px';
        this.dragger.style.left = -this.draggerWidth + 'px';
        this.dragger.style.marginLeft = (this.draggerWidth / 2) + 'px';

        this.range.addEventListener("mousedown", function (e: MouseEvent) {
            sliderComponent.rangeWidth = this.offsetWidth;
            sliderComponent.rangeLeft = this.offsetLeft;
            sliderComponent.down = true;
            sliderComponent.updateDragger(e, 'fromDown');
            return false;
        });

        this.range.addEventListener("mousemove", function (e: MouseEvent) {
            sliderComponent.updateDragger(e, 'fromMove');
        });

        this.range.addEventListener("mouseup", function () {
            sliderComponent.down = false;
        });
    }


    //Angualr Life Cycle Hooks
    ngAfterViewInit(): void{
        this.pkSlider(this.sliderID, this);
    }

}