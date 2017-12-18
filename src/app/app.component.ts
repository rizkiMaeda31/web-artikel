import { Component } from '@angular/core';
import {SubscriptionService} from "./service/subscription.service";

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    constructor(public subService: SubscriptionService
    ){

    }
    unSub(): void{
        this.subService.unsubscribeUser();
    }
    Sub(): void {
        this.subService.subscribeUser();
    }
}
