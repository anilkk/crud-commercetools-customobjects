
import { actions as sdkActions } from '@commercetools-frontend/sdk';
import { MC_API_PROXY_TARGETS } from '@commercetools-frontend/constants';

export const getCustomObjects = () => sdkActions.get({
    mcApiProxyTarget: MC_API_PROXY_TARGETS.COMMERCETOOLS_PLATFORM,
    service: 'customObjects',
    options: {}
  });;


export default {
    getCustomObjects: getCustomObjects
};