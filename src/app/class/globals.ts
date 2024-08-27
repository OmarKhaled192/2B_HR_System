import { BehaviorSubject, Observable } from 'rxjs';

// this class build specialy for Translations, To Lens On Any Changes Cause In Translation fields.
export abstract class Globals {
    public static mainLang: BehaviorSubject<string> =
        new BehaviorSubject<string>('ar');

    constructor() {}

    public static setMainLang(val: string) {
        Globals.mainLang.next(val);
    }

    public static getMainLang(): BehaviorSubject<string> {
        return Globals.mainLang;
    }

    public static getMainLangChanges(): Observable<string> {
        return Globals.mainLang.asObservable();
    }
}
