# Plugin Options

[After installation](/installation-and-usage.html), you can configure the plugin to your liking through the following settings.

## Default font

By default, this plugin uses the Google Fonts CDN to pull in the Roboto font. This isn't the same font Discord uses, so if you want to provide your own, you can disable it and override the CSS.

```js
// index.js
Vue.use(VueDiscordMessage, {
	disableFont: true,
});
```

```css
/* index.css */
.discord-messages {
	font-family: 'Your Font', sans-serif;
}
```

## Avatar shortcuts

The current avatar shortcut strings available are "blue", "gray", "green", "orange", and "red". If you want to add your own shortcuts, you can use the 2nd parameter in the `Vue.use()` call.

```js
Vue.use(VueDiscordMessage, {
	avatars: {
		djs: require('./assets/discord-avatar-djs.png'),
		jojo: 'https://i.imgur.com/BOlehTj.jpg',
	},
});
```

If you're using Webpack, you should use `require()` when dealing with relative paths.

Do note that you can override the default avatar value by providing a `default` key. The default value is `'blue'`, but you can change it to something like `'red'`, a relative path, or an external link.

```js
Vue.use(VueDiscordMessage, {
	avatars: {
		'default': 'https://i.imgur.com/BOlehTj.jpg',
	},
});
```

## Profile shortcuts

Sometimes you'll want to use the same message data across multiple messages. You can do so by providing an object of profiles in the plugin options.

```js
Vue.use(VueDiscordMessage, {
	profiles: {
		sanc: {
			author: 'Sanctuary',
			avatar: 'https://i.imgur.com/0TeacfY.png',
		},
		rinon: {
			author: 'Rinon',
			avatar: 'https://i.imgur.com/axQ9wJl.png',
			bot: true,
			roleColor: '#ee82ee',
		},
	},
});
```

And then in your Vue templates:

```html
<discord-messages>
	<discord-message user="rinon">
		Welcome to our server, <mention>Sanctuary</mention>!
	</discord-message>
	<discord-message user="sanc">
		Hey, glad to be here!
	</discord-message>
</discord-messages>
```

<div is="discord-messages">
	<discord-message user="rinon">
		Welcome to our server, <mention>Sanctuary</mention>!
	</discord-message>
	<discord-message user="sanc">
		Hey, glad to be here!
	</discord-message>
</div>

## Renaming the components

If you want to give the components different names than the default ones, due to possible naming conflictions or whatever other reason you may have, you can do so.

```js
Vue.use(VueDiscordMessage, {
	componentNames: {
		'discord-messages': 'd-messages',
		'discord-message': 'd-message',
		'discord-embed': 'd-embed',
		'embed-fields': 'e-fields',
		'embed-field': 'e-field',
		mention: 'd-mention',
	},
});
```
