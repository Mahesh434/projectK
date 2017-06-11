import { Component } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome User';
}
