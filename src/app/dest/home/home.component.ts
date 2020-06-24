import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'moo-home',
    templateUrl: './home.template.html',
    styleUrls: ['./home.style.scss']
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    public ngOnInit(): void {
        console.log("Hello Home");
    }

    public ngOnDestroy(): void {
    }
}
