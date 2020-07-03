import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { PokeLocationMapObj } from '@app/dest/home/home.component';

@Component({
    selector: 'moo-poke-location-map-obj',
    templateUrl: './poke-location-map-obj.template.html',
    styleUrls: ['./poke-location-map-obj.style.scss']
})
export class PokeLocationMapObjComponent {
    @ViewChild('divContainer', { static: true }) public divContainer!: ElementRef<HTMLDivElement>;
    @Input() public pokeLocationMapObj?: PokeLocationMapObj;

    constructor() {
    }
}
