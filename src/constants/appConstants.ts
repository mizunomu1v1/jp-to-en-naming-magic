import { TranslateApiResponse } from '../types/appTypes';

export const LIBRE_TRANSLATE_API_BASE_URL =
  'https://ja.libretranslate.com/translate';

export const LIBRE_TRANSLATE_API_ERROR_RESPONSE: TranslateApiResponse = {
  translatedText: 'エラーが発生しました',
};
