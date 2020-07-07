import { Pipe, PipeTransform } from '@angular/core';

// source: https://blog.bitsrc.io/how-to-use-custom-pipes-in-angular-54a8b3d2eec2

@Pipe({
    name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {
    private units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

    public transform(bytes: number = 0, precision: number = 2): string {
        // tslint:disable-next-line:curly
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) return '?';

        let unit = 0;

        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }

        return bytes.toFixed(+precision) + ' ' + this.units[unit];
    }
}