# vsf-messenger-chat

⚡️ Facebook Messenger Customer Chat module for Vue Storefront ⚡️

> Messenger Platform Customer Chat Plugin (beta) documentation: https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin

<br/>

## Table of Contents

<br/>

- [Installation](#installation)

- [Usage](#usage)

- [Configuration](#configuration)

- [License](#license)

<br/>

## Installation

<br/>

### 1. Install Facebook JS SDK Module

<br/>

```bash
cd ../vue-storefront/src/modules;
git clone https://github.com/new-fantastic/vsf-facebook-js-sdk.git
```

<br/>

### 2. Download the module

<br/>

Go to your `vue-storefront`'s `modules` catalog and clone repository with the module.

<br/>

```bash
cd ../vue-storefront/src/modules;
git clone https://github.com/new-fantastic/vsf-messenger-chat.git;
```

<br/>

### 3. Import and register the module

<br/>

Go to `../vue-storefront/src/modules/index.ts` and add code below

<br/>

```javascript
import { VsfMessengerChat } from './vsf-messenger-chat'
...
export const registerModules: VueStorefrontModule[] = [
...
VsfMessengerChat
...
]
```

<br/>

### 4. Add new settings to your config

<br/>

Go to `../vue-storefront/config/local.json` and add code below

<br/>

```json
"facebookSdk" : {
   "appId" : "<your_fb_app_id>",
   "pageId": "<your_fb_page_id>"
}
```

<br/>

## Usage

<br/>

### Local

<br/>

Include the `MessengerChat` component in your template directly:

<br/>

```javascript
import { MessengerChat } from 'src/modules/vsf-messenger-chat/components/MessengerChat';

export default {
  ...
  components: {
    MessengerChat
  }
  ...
}
```

<br/>

<br/>

## Configuration

<br/>

### Appearance

<br/>

You can customize the appearance of your Customer Chat by passing values to component in template through these properties:

<br/>

| Property                  | Type      | Default                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------- |:---------:| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `theme_color`             | `String`  | `#0084FF`                            | ***Optional***. The color to use as a theme for the plugin, including the background color of the customer chat plugin icon and the background color of any messages sent by users. Supports any hexadecimal color code with a leading number sign (e.g. `#0084FF`). It has to be valid HEX Color**except white**.                                                                                                                                                                                                                                                                                  |
| `logged_in_greeting`      | `String`  | `null`                               | ***Optional***. The greeting text that will be displayed if the user is currently logged in to Facebook. Maximum 80 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `logged_out_greeting`     | `String`  | `null`                               | ***Optional***. The greeting text that will be displayed if the user is currently not logged in to Facebook. Maximum 80 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `greeting_dialog_display` | `String`  | `show` on desktop / `hide` on mobile | ***Optional***. Sets how the greeting dialog will be displayed. The following values are supported:<br/>- `show`: The greeting dialog is shown and remains open on desktop and mobile after the number of seconds set by the greeting_dialog_delay attribute.<br/>- `hide`: The greeting dialog is hidden until a user clicks on the plugin on desktop and mobile.<br/>- `fade`: The greeting dialog is shown briefly after the number of seconds set by the greeting_dialog_delay attribute, then fades away and is hidden on desktop. The dialog is hidden on mobile. |
| `greeting_dialog_delay`   | `Boolean` | `false`                              | ***Optional***. Sets the number of seconds of delay before the greeting dialog is shown after the plugin is loaded. This can be used to customize when you want the greeting dialog to appear.                                                                                                                                                                                                                                                                                                                                                                          |

<br/>

### Example

<br/>

```javascript
<template>
...
  <messenger-chat theme_color="#000000" :logged_in_greeting="$t('Hello! How can we help you?')"/>
...
</template>

<script>
...
import { MessengerChat } from 'src/modules/vsf-messenger-chat/components/MessengerChat';
...
export default {
 components: {
  MessengerChat
 }
}
...
</script>
```

## License

<br/>
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
