import rootStore from '@vue-storefront/store'

// First we need to register Facebook JS SDK

const facebookSdkSnippet = function () {
  window.fbAsyncInit = function () {
    FB.init({
      appId: config.facebookSdk.appId, // Facebook App Id which can be shared for many different Facebook integrations (e. g. Like Button, Comments, Social Login etc.)
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v3.2'
    })
  }
  // The script below needs to be embedded programatically
  // <script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>
}

// But i wonder if we should handle Facebook JS SDK as a separate, BASE module for other Facebook modules?
// More about Facebook JS SDK here => https://developers.facebook.com/docs/javascript/quickstart/

// After registering FB JS SDK we can register Customer Chat code

const messengerChatSnippet = function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s)
  js.id = id
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
  fjs.parentNode.insertBefore(js, fjs)
}

// https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin/sdk#install

export function afterRegistration ({ Vue, config, store, isServer }) {
  if (!isServer && config.facebookSdk && config.facebookSdk.appId) {
    // messengerChatSnippet (document, 'script', 'facebook-jssdk')
  }
}
