import { Pipe, PipeTransform } from '@angular/core';

// source: https://medium.com/@goyalhimanshu414/creating-a-time-left-and-time-ago-functionality-using-a-single-angular-pipe-ad206d13d446

@Pipe({
    name: 'timeDiff',
})
export class TimeDiffPipe implements PipeTransform {

    public transform(value: any): any {
        if (value) {
            // const expiryDate = +new Date(value);
            // const now = +new Date();

            // let seconds = (expiryDate - now) / 1000; // expiry Date - current time
            let seconds = Math.round(+new Date(value) / 1000); // expiry Date - current time

            if (!seconds) {
                return 'now';
            }

            const sign = Math.sign(seconds);
            let suffix = "left"; // if the time is yet to come.

            if (sign === -1) {
                seconds = Math.floor(seconds*sign) // removign the sign and the float part -25.5  = 25 seconds 
                suffix = "ago" // if time is already expired.
            }

            const intervals: {[interval in 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second']: number} = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };

            const allInterval: ('year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second')[] = ['year', 'month','week','day', 'hour', 'minute', 'second'];
            
            let counter: number = 0;

            for (let interval of allInterval) {
                counter = Math.floor(seconds / intervals[interval]);
                let toReturn: string = "";
                // calculateion shown for for 2hour:51 minute = 171 minute = 10260 second
                if (counter > 0) {
                    toReturn += this.calculateTime(counter, interval);  // this will give 2 hours
                    let timeLeft = seconds - counter * intervals[interval]; // 3060 second  
                    let index = allInterval.indexOf(interval) + 1; // get the index of next unit 
                    interval = allInterval[index]; // value of next unit = minute

                    if (index > 6) {
                        return `${toReturn} ${suffix}`; // second ago for boundary case
                    }

                    counter = Math.floor(timeLeft / intervals[interval]);  // 3060 second = 51
                    toReturn = toReturn + " " + this.calculateTime(counter, interval) + " " + suffix; // will calculate "2 hours 51 Minutes" from current time

                    return toReturn; 
                }
            }
        }

        return value;
    }

    public calculateTime(counter: number, timeUnit: string): string {
        if (counter === 1) {
            return counter + ' ' +timeUnit; // singular (1 hours ago)
        } else {

        let toReturn = counter + ' ' + timeUnit + 's ';
            return toReturn; // plural (2 hours ago)
        }
    }
}
