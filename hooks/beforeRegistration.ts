// We can register Customer Chat code

const messengerChatSnippet = function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s)
  js.id = id
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
  fjs.parentNode.insertBefore(js, fjs)
}

// https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin/sdk#install

export function beforeRegistration ({ Vue, config, store, isServer }) {
  if (!isServer && config.facebookJsSdk && config.facebookJsSdk.appId) {
    messengerChatSnippet (document, 'script', 'facebook-jssdk')
  } 
}
 