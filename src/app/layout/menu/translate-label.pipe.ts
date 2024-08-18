import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'translateLabel'
})

export class TranslateLabelPipe implements PipeTransform {

    newLabel:string = '';
    allValues = [];

    constructor(private translateService: TranslateService) {}

    transform(value: any): any {
        if (!value) {
            return value;
        }


        let label = value.label;

        //  let newLabel =  this.translateService.instant(label);

        // this.translateService.getTranslation("ar").subscribe((res) =>  {
        //     console.log(res);
        // })

        this.translateService.get(label).subscribe((transVal)=> {
                // console.log(transVal);
                this.newLabel = transVal;
                console.log({ ...value,  label: this.newLabel})
            }
        )


        return { ...value,  label: this.newLabel};
        // return value

    }

}
