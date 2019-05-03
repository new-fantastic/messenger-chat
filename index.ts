import { beforeRegistration } from './hooks/beforeRegistration.ts'
import { VueStorefrontModule, VueStorefrontModuleConfig } from '@vue-storefront/core/lib/module'

export const KEY = 'messenger-chat'

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  beforeRegistration
}

export const VsfMessengerChat = new VueStorefrontModule(moduleConfig)