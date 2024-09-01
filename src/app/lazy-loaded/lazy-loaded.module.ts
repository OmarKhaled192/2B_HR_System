import { NgModule } from '@angular/core';
import { MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateParser } from '@ngx-translate/core';
import { CustomLoader } from '../class/custom-loader';
import { CustomParser } from '../class/custom-parser';
import { CustomHandler } from '../class/custom-handler';


@NgModule({
  declarations: [],
  imports: [
        TranslateModule.forChild({
            loader: {provide: TranslateLoader, useClass: CustomLoader},
            parser: {provide: TranslateParser, useClass: CustomParser},
            missingTranslationHandler: {provide: MissingTranslationHandler, useClass: CustomHandler},
            isolate: true
        }),
    ]
})

export class LazyLoadedModule { }
