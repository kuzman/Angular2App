// libs
import {
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';
// import {TEST_MULTILINGUAL_PROVIDERS, TEST_MULTILINGUAL_RESET} from '../testing/index';
import {TEST_MULTILINGUAL_PROVIDERS} from '../testing/index';
// import {ILang, WindowService} from '../../core.framework/index';
import {MultilingualService, MultilingualStateI} from '../index';

export function main() {
  describe('i18n:', () => {
    describe('MultilingualService', () => {

      it('should at a minimum support english', () => {

      });
      it('changeLang - should not switch unless supported', inject([MultilingualService], (multilang: MultilingualService) => {
        multilang.changeLang('fr');

      }));

    });
  });

}
