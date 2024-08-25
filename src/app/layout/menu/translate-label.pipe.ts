import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'translateLabel',
  pure: false // Set this to false to make the pipe non-pure
})

export class TranslateLabelPipe implements PipeTransform, OnDestroy {
    private subscription: Subscription;

    constructor(private translateService: TranslateService) {
        this.subscription = this.translateService.onLangChange.subscribe(() => {
            // Trigger the pipe transformation when the language changes
            this.transform.call(this);
        });
    }


    transform(value: any): Observable<any> {
        if (!value) {
            return of(value);
        }

            // Translate the label
            return this.translateService.get(value.label).pipe(
                map((transVal) => {
                    return { ...value, label: transVal };
                })
            );
    }

    ngOnDestroy() {
        // Unsubscribe from the language change event when the component is destroyed
        this.subscription.unsubscribe();
    }
}
