import { afterRegistration } from './hooks/afterRegistration'
import { VueStorefrontModule, VueStorefrontModuleConfig } from '@vue-storefront/core/lib/module'

export const KEY = 'vsf-messenger-chat'

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  afterRegistration
}

export const VsfMessengerChat = new VueStorefrontModule(moduleConfig)
