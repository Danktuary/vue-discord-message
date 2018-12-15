# Vue Discord Message

Vue components to easily build and display fake Discord messages on your webpages.

## Features

* Design modeled after Discord itself
* Comfy and compact mode support
* Dark and light themes support
* Set the message author's username
* Set the message author's avatar (choose from the default avatars or provide your own)
* Set the message author's role color
* Display the "bot" tag on messages
* Display fake user, role, and channel mentions
* Highlight mentions (for when the "logged in user" is pinged)
* Set mention colors (only used for role pings)
* Complete embed support
* Simple syntax!

## Preview

![vue-discord-message preview](https://i.imgur.com/Yn62i0l.png)

```vue
<discord-messages>
	<discord-message>
		Hey guys, I'm new here! Glad to be able to join you all!
	</discord-message>
	<discord-message author="Dawn" avatar="red">
		Hi, I'm new here too!
	</discord-message>
	<discord-message author="Sanctuary" avatar="https://i.imgur.com/FPWMhCa.png" role-color="#0099ff">
		Hey, <mention>User</mention> and <mention>Dawn</mention>. Welcome to our server!
	</discord-message>
	<discord-message author="Twelve" avatar="https://i.imgur.com/Mc0F0Hf.png" role-color="#15b153">
		Hello everyone! How's it going?
	</discord-message>
	<discord-message author="User">
		Thank you <mention :highlight="true">Sanctuary</mention>!
	</discord-message>
	<discord-message author="Yotsuba" avatar="https://i.imgur.com/amw0MGJ.png">
		I'm doing well, <mention>Twelve</mention>. What about yourself?
	</discord-message>
	<discord-message author="Twelve" avatar="https://i.imgur.com/Mc0F0Hf.png" role-color="#15b153">
		!8ball How am I doing today?
	</discord-message>
	<discord-message :bot="true" author="Rinon" avatar="https://i.imgur.com/axQ9wJl.png" role-color="violet">
		Yes.
	</discord-message>
</discord-messages>
```

## Installation

### Package managers

If you're using a package manager, you should install it like so:

```bash
yarn add vue-discord-message

# or if you prefer npm
npm install vue-discord-message
```

And then register it as a Vue plugin.

```js
// index.js
import Vue from 'vue';
import DiscordMessage from 'vue-discord-message';

Vue.use(DiscordMessage);
```

### Browser build

If you're using a browser build, you can pull it in via unpkg and it'll automatically register as a plugin:

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-discord-message"></script>
```

### Plugin options

By default, this plugin uses the Google Fonts CDN to pull in the Roboto font. This isn't the same font Discord uses, so if you want to provide your own, you can disable it and override the CSS.

```js
// index.js
Vue.use(DiscordMessage, {
	disableFont: true,
});
```

```css
/* index.css */
.discord-messages {
	font-family: 'Your Font', sans-serif;
}
```

The current avatar shortcut strings available are "blue", "gray", "green", "orange", and "red". If you want to add your own shortcuts, you can use the 2nd parameter in the `Vue.use()` call.

```js
Vue.use(DiscordMessage, {
	avatars: {
		djs: require('./assets/discord-avatar-djs.png'),
		jojo: 'https://i.imgur.com/BOlehTj.jpg',
	},
});
```

If you're using Webpack, you should use `require()` when dealing with relative paths.

Do note that you can override the default avatar value by providing a `default` key. The default value is `'blue'`, but you can change it to something like `'red'`, a relative path, or an external link.

```js
Vue.use(DiscordMessage, {
	avatars: {
		default: 'https://i.imgur.com/BOlehTj.jpg',
	},
});
```

## Usage

The syntax is kept fairly simple. Here's a basic example of a regular conversation:

```vue
<discord-messages>
	<discord-message>
		Hey guys, I'm new here! Glad to be able to join you all!
	</discord-message>
	<discord-message author="Dawn" avatar="red">
		Hi, I'm new here too!
	</discord-message>
	<discord-message author="Sanctuary" avatar="https://i.imgur.com/FPWMhCa.png" role-color="#0099ff">
		Hey, <mention>User</mention> and <mention>Dawn</mention>. Welcome to our server!
	</discord-message>
</discord-messages>
```

### DiscordMessages component

A wrapper for any child `<discord-message>` components. Must be used in order for messages to display properly.

#### Properties

| Prop | Type | Optional | Default Value | Description |
| --- | --- | --- | --- | --- |
| light-theme | Boolean | ✅ | `false` | Whether all the messages in this block should use light theme or not. |
| compact-mode | Boolean | ✅ | `false` | Whether all the messages in this block should use compact mode or not. |

### DiscordMessage component

A Discord message component. The default slot is used for the message's content.

#### Properties

| Prop | Type | Optional | Default Value | Description |
| --- | --- | --- | --- | --- |
| author | String | ✅ | `'User'` | The message author's username. |
| avatar | String | ✅ | `'blue'` | The message author's avatar. Can be a shortcut string, relative path, or external link.
| bot | Boolean | ✅ | `false` | Whether the message author is a bot or not. |
| role-color | String | ✅ | | The message author's primary role color. |

### Mention component

A mention that can be used within messages. The default slot is used for the mention's content.

#### Properties

| Prop | Type | Optional | Default Value | Description |
| --- | --- | --- | --- | --- |
| highlight | Boolean | ✅ | `false` | Whether this entire message block should be highlighted (to emulate the "logged in user" being pinged). |
| color | String | ✅ | | The color to use for this mention. Only works on role mentions. |
| type | String | ✅ | `'user'` | The type of mention this should be. Valid values: `user`, `channel`, `role` |

### DiscordEmbed component

An embed that can be attached to the end of your messages. The default slot is used for the embed's description. The `footer` slot is used for the footer text.

#### Properties

| Prop | Type | Optional | Default Value | Description |
| --- | --- | --- | --- | --- |
| color | String | ✅ | | The color to use for the embed's left border. |
| author | Object | ✅ | `{}` | The author data to use. |
| author.name | String | ✅ | | The author's name. |
| author.image | String | ✅ | | The author's avatar URL. |
| author.url | String | ✅ | | The URL to open when you click on the author's name. |
| title | String | ✅ | | The embed title. |
| url | String | ✅ | | The URL to open when you click on the embed title. |
| thumbnail | String | ✅ | | The thumbnail image to use. |
| image | String | ✅ | | The embed image to use (displayed at the bottom). |
| footer-image | String | ✅ | | The image to use next to the footer text. |
| timestamp | Date\|String | ✅ | | The timestamp to use for the footer text. When supplying a string, the format must be `01/31/2000`. |

#### Notes

To ensure the embed gets displayed correctly inside your message, be sure to give it the proper `slot` attribute.

```vue
<discord-message>
	Hi, I'm part of the normal message content.
	<discord-embed slot="embeds" color="#0099ff">
		Hi, I'm part of the embed message content.
	</discord-embed>
</discord-message>
```

### EmbedFields component

A wrapper for any child `<embed-field>` components. Must be used in order for fields to display properly.

#### Notes

To ensure the embed fields gets displayed correctly inside your embed, be sure to give it the proper `slot` attribute.

```vue
<discord-message>
	<discord-embed slot="embeds">
		Hi, I'm part of the embed message content.
		<embed-fields slot="fields">
			<!-- Embed fields go here -->
		</embed-fields>
	</discord-embed>
</discord-message>
```

### EmbedField component

An embed field component.

#### Properties

| Prop | Type | Optional | Default Value | Description |
| --- | --- | --- | --- | --- |
| title | String | ❌ | | The field's title. |
| inline | Boolean | ✅ | `false` | Whether this field should be displayed inline or not. |

#### Notes

At least 2 consecutive fields need to be marked as inline in order for them to actually display next to each other. The maximum amount of inline fields is 3, and drops to 2 if an embed thumbnail is used.

```vue
<discord-message>
	<discord-embed slot="embeds">
		Hi, I'm part of the embed message content.
		<embed-fields slot="fields">
			<embed-field :inline="true" title="Inline field">
				Field content.
			</embed-field>
			<embed-field :inline="true" title="Inline field">
				Field content.
			</embed-field>
		</embed-fields>
	</discord-embed>
</discord-message>
```
