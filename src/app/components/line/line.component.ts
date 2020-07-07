import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';

// source: https://stackoverflow.com/questions/19382872/how-to-connect-html-divs-with-lines
// source: https://jsfiddle.net/rdamasceno/o3Lroapa/5/

@Component({
    selector: 'moo-line',
    templateUrl: './line.template.html',
    styleUrls: ['./line.style.scss']
})
export class LineComponent implements OnInit {
    @ViewChild('line', { static: true }) private line!: ElementRef<HTMLDivElement>;

    // @Input() public pointA?: HTMLElement;
    // @Input() public pointB?: HTMLElement;

    @Input() public pointA?: HTMLElement;
    @Input() public pointB?: HTMLElement;

    constructor() {
    }

    public ngOnInit(): void {
        this.adjustLine();
    }

    public adjustLine(): void {
        if (!this.pointA) {
            const message = "Unexpected missing pointA";

            console.error(message);
            throw new Error(message);
        }

        if (!this.pointB) {
            const message = "Unexpected missing pointB";

            console.error(message);
            throw new Error(message);
        }

        this._adjustLine(this.pointA, this.pointB, this.line.nativeElement);
    }

    private _adjustLine(from: HTMLElement, to: HTMLElement, line: HTMLDivElement): void {

        let fT = from.offsetTop  + from.offsetHeight / 2;
        let tT = to.offsetTop 	 + to.offsetHeight / 2;
        let fL = from.offsetLeft + from.offsetWidth / 2;
        let tL = to.offsetLeft 	 + to.offsetWidth / 2;

        // Corrects the position of the line given that I'm centering the objects using transform: translate(-50%, -50%);
        fT -= from.offsetHeight / 2;
        tT -= to.offsetHeight / 2;
        fL -= from.offsetWidth / 2;
        tL -= to.offsetWidth / 2;
        // END Correct
        
        const CA   = Math.abs(tT - fT);
        const CO   = Math.abs(tL - fL);
        const H    = Math.sqrt(CA*CA + CO*CO);
        let ANG  = 180 / Math.PI * Math.acos( CA/H );

        let top = 0;
        let left = 0;
        
        if (tT > fT) {
            top  = (tT-fT)/2 + fT;
        } else {
            top  = (fT-tT)/2 + tT;
        }

        if (tL > fL) {
            left = (tL-fL)/2 + fL;
         }else {
            left = (fL-tL)/2 + tL;
        }
        
        if (( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)) {
            ANG *= -1;
        }

        top-= H/2;
        
        // source: https://stackoverflow.com/questions/53526178/element-implicitly-has-an-any-type-because-index-expression-is-not-of-type-nu
        // There's a Typescript issue with style property where currently it assumes its indexes are of type number when they should be string
        line.style["-webkit-transform" as any] = 'rotate('+ ANG +'deg)';
        line.style["-moz-transform" as any] = 'rotate('+ ANG +'deg)';
        line.style["-ms-transform" as any] = 'rotate('+ ANG +'deg)';
        line.style["-o-transform" as any] = 'rotate('+ ANG +'deg)';
        line.style["-transform" as any] = 'rotate('+ ANG +'deg)';
        line.style.top    = top+'px';
        line.style.left   = left+'px';
        line.style.height = H + 'px';
    }

    // This assumes there only one instance exists of this Class at one time
    @HostListener('window:resize')
    protected onResize(): void {
        this.adjustLine();
    }

    // This assumes there only one instance exists of this Class at one time
    @HostListener('window:orientationchange')
    protected onOrientationChange(): void {
        this.adjustLine();
    }

    public ngOnDestroy(): void {
    }
}
