import {
  setLocale,
  loadTranslations,
  syncTranslationWithStore,
} from 'react-redux-i18n'
import { getCookie } from 'react-use-cookie'

import translations from 'translations'

import { LANG_COOKIE_NAME } from './constants'

// eslint-disable-next-line import/no-anonymous-default-export
export default (store) => {
  const prevLang = getCookie(LANG_COOKIE_NAME) || 'en'

  syncTranslationWithStore(store)
  store.dispatch(loadTranslations(translations))
  store.dispatch(setLocale(prevLang))
}
