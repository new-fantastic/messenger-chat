<template>
  <div
    id="vsf-messenger-chat"
  >
  </div>
</template>

<script>

export default {
  name: 'MessengerChat',
  props: {
    theme_color: {
      type: String,
      required: false
    },
    logged_in_greeting: {
      type: String,
      required: false
    },
    logged_out_greeting : {
      type: String,
      required: false
    },
    greeting_dialog_display: {
      type: String,
      required: false,
      default: 'hide'
    },
    greeting_dialog_delay: {
      type: Boolean,
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
