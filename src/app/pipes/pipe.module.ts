import { NgModule } from '@angular/core';

import { NoSanitizeStylePipe } from './noSanitizeStyle.pipe';
import { NoSanitizeUrlPipe } from './noSanitizeUrl.pipe';
import { TimeDiffPipe } from './timeDiff.pipe';
import { FileSizePipe } from './file-size.pipe';

@NgModule({
    imports: [],
    declarations: [
        NoSanitizeStylePipe,
        NoSanitizeUrlPipe,
        TimeDiffPipe,
        FileSizePipe,
    ],
    exports:[
        NoSanitizeStylePipe,
        NoSanitizeUrlPipe,
        TimeDiffPipe,
        FileSizePipe,
    ],
})

export class PipeModule {
}
