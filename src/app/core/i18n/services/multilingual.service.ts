// angular
import {Injectable} from '@angular/core';

// libs
import * as _ from 'lodash';
import {TranslateService} from 'ng2-translate/ng2-translate';


// analytics
const CATEGORY: string = 'Multilingual';

// standard language interface
export interface ILang {
	code: string;
  title: string;
}
export interface MultilingualStateI {
  lang: string;
}

export const MULTILINGUAL_ACTIONS: any = {
  LANG_CHANGE: `[${CATEGORY}] LANG_CHANGE`
};

// service
@Injectable()
export class MultilingualService {

  // default supported languages
  // see main.ts bootstrap for example of how to provide different value
  public static SUPPORTED_LANGUAGES: Array<ILang> = [
    { code: 'en', title: 'English' }
  ];

  constructor(private translate: TranslateService) {

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use
    this.translate.use('en');

  }

  public changeLang(lang: string) {
    if (_.includes(_.map(MultilingualService.SUPPORTED_LANGUAGES, 'code'), lang)) {

    }
  }
}
