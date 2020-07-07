
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

// source: https://stackoverflow.com/questions/47681813/angular-2-sanitizing-html-stripped-some-content-on-css-style?rq=1
// source: https://stackoverflow.com/questions/38110028/angular-2-adding-calc-as-inline-style-unsafe-interpolation-using-parentheses
// source: https://angular.io/api/platform-browser/DomSanitizer

@Pipe({
	name: 'noSanitizeUrl',
})
export class NoSanitizeUrlPipe implements PipeTransform {
	constructor(private domSanitizer: DomSanitizer) { }

	public transform(url: string): SafeUrl {
			return this.domSanitizer.bypassSecurityTrustUrl(url || "");
	}
}
