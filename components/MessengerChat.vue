<template>
  <div>
    <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>
    <div
      id="vsf-messenger-chat"
      class="fb-customerchat"
      attribution=setup_tool
      :page_id="pageId"
      :theme_color="theme_color"
      :logged_in_greeting="logged_in_greeting"
      :logged_out_greeting="logged_out_greeting"
      :greeting_dialog_display="greeting_dialog_display"
      :greeting_dialog_delay="greeting_dialog_delay"
    ></div>
  </div>
</template>

<script>

import rootStore from '@vue-storefront/core/store'
const pId = rootStore.state.config.facebookJsSdk.pageId

export default {
  name: 'MessengerChat',

  data() {
    return {
      pageId: pId
    }
  },
  
  props: {
    theme_color: {
      type: String,
      required: false,
      validator: value => {
        // isHex?
        if(value.substr(0, 1) != '#') {
          return false
        }

        const rest = value.substr(1)
        return /[0-9A-Fa-f]{6}/g.test(rest) || /[0-9A-Fa-f]{3}/g.test(rest)
      }
    },
    logged_in_greeting: {
      type: String,
      required: false,
      validator: value => value.length <= 80 // It's my length
    },
    logged_out_greeting: {
      type: String,
      required: false,
      validator: value => value.length <= 80
    },
    greeting_dialog_display: {
      type: String,
      required: false,
      default: 'hide',
      validator: value => ['show', 'fade', 'hide'].includes(value)
    },
    greeting_dialog_delay: {
      type: Number,
      required: false
    }
  }
}

</script>

<style lang="scss" scoped>

#vsf-messenger-chat {
  position: fixed;
  z-index: 999999999999999999999999999999;
}

</style>
