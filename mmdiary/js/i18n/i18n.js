/**
 * @author leon
 */

import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
    'en': require('./locales/en-us'),
    'en-US': require('./locales/en-us'),
    'zh-CN': require('./locales/zh-cn')
};

I18n.locale = 'zh-CN';

export default I18n;