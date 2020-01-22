# Components Reference

## DiscordMessages

A wrapper for any child `<discord-message>` components. Must be used in order for messages to display properly.

```html
<discord-messages>
	<discord-message>...</discord-message>
</discord-messages>
```

::: tip
To keep things short and avoid being repetitive, the `<discord-messages>` wrapper will be omitted from further examples on this page.
:::

### Properties

| Prop | Type | Optional | Default Value | Description |
| --- | --- | --- | --- | --- |
| light-theme | Boolean | ✅ | `false` | Whether to use light theme or not. |
| compact-mode | Boolean | ✅ | `false` | Whether to use compact mode or not. |

<div is="discord-messages" :light-theme="true">
	<discord-message>Look at me I'm a beautiful butterfly</discord-message>
	<discord-message>Fluttering in the sunlight 🌞</discord-message>
</div>

```html
<discord-messages :light-theme="true">
	<discord-message>Look at me I'm a beautiful butterfly</discord-message>
	<discord-message>Fluttering in the sunlight 🌞</discord-message>
</discord-messages>
```

<div is="discord-messages" :compact-mode="true">
	<discord-message>Look at me I'm a beautiful butterfly</discord-message>
	<discord-message>Fluttering in the moonlight 🌝</discord-message>
	<discord-message>Waiting for the day when</discord-message>
	<discord-message>Compact mode would be turned on</discord-message>
</div>

```html
<discord-messages :compact-mode="true">
	<discord-message>Look at me I'm a beautiful butterfly</discord-message>
	<discord-message>Fluttering in the moonlight 🌝</discord-message>
	<discord-message>Waiting for the day when</discord-message>
	<discord-message>Compact mode would be turned on</discord-message>
</discord-messages>
```

## DiscordMessage

A Discord message component. The default slot is used for the message's content.

<div is="discord-messages">
	<discord-message>
		Hey guys, I'm new here! Glad to be able to join you all!
	</discord-message>
	<discord-message author="Dawn" avatar="red">
		Hi, I'm new here too!
	</discord-message>
</div>

```html
<discord-message>
	Hey guys, I'm new here! Glad to be able to join you all!
</discord-message>
<discord-message author="Dawn" avatar="red">
	Hi, I'm new here too!
</discord-message>
```

### Properties

| Prop | Type | Optional | Default Value | Description |
| --- | --- | --- | --- | --- |
| author | String | ✅ | `'User'` | The message author's username. |
| avatar | String | ✅ | `'blue'` | The message author's avatar. Can be a [shortcut string](/plugin-options.html#avatar-shortcuts), relative path, or external link.
| bot | Boolean | ✅ | `false` | Whether the message author is a bot or not. |
| edited | Boolean | ✅ | `false` | Whether the message has been edited or not. |
| profile | String | ✅ | | The ID of the [profile](/plugin-options.html#profile-shortcuts) you want to assign to this message. |
| role-color | String | ✅ | | The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp). |
| timestamp | Date\|String | ✅ | `new Date()` | The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`. |

## Mention

A mention that can be used within messages. The default slot is used for the mention's content.

### Properties

| Prop | Type | Optional | Default Value | Description |
| --- | --- | --- | --- | --- |
| highlight | Boolean | ✅ | `false` | Whether this entire message block should be highlighted (to emulate the "logged in user" being pinged). |
| color | String | ✅ | | The color to use for this mention. Only works for role mentions and must be in hex format. |
| profile | String | ✅ | | The ID of the [profile](/plugin-options.html#profile-shortcuts) you want to assign to this message. This will either use the profile's `author` property to set the default slot content (if empty) , or use the profile's `roleColor` property to set the color for role pings. |
| type | String | ✅ | `'user'` | The type of mention this should be. This will prepend the proper prefix character. Valid values: `user`, `channel`, `role` |

<div is="discord-messages">
	<discord-message author="Sanctuary" avatar="https://i.imgur.com/0TeacfY.png" role-color="#0099ff">
		Hey, <mention>User</mention> and <mention>Dawn</mention>. Welcome to our server! Be sure to read through the <mention type="channel">rules</mention>. You can ping <mention type="role" color="#70f0b4">Support</mention> if you need help.
	</discord-message>
	<discord-message>
		Hey there <mention :highlight="true">Sanctuary</mention>, thanks! I will!
	</discord-message>
</div>

```html
<discord-message author="Sanctuary" avatar="https://i.imgur.com/0TeacfY.png" role-color="#0099ff">
	Hey, <mention>User</mention> and <mention>Dawn</mention>. Welcome to our server! Be sure to read through the <mention type="channel">rules</mention>. You can ping <mention type="role" color="#70f0b4">Support</mention> if you need help.
</discord-message>
<discord-message>
	Hey there <mention :highlight="true">Sanctuary</mention>, thanks! I will!
</discord-message>
```

## DiscordEmbed

An embed that can be attached to the end of your messages. The default slot is used for the embed's description. The `footer` slot is used for the footer text.

### Properties

| Prop | Type | Optional | Default Value | Description |
| --- | --- | --- | --- | --- |
| color | String | ✅ | | The color to use for the embed's left border. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp). |
| author-name | String | ✅ | | The author's name. |
| author-image | String | ✅ | | The author's avatar URL. |
| author-url | String | ✅ | | The URL to open when you click on the author's name. |
| title | String | ✅ | | The embed title. |
| url | String | ✅ | | The URL to open when you click on the embed title. |
| thumbnail | String | ✅ | | The thumbnail image to use. |
| image | String | ✅ | | The embed image to use (displayed at the bottom). |
| footer-image | String | ✅ | | The image to use next to the footer text. |
| timestamp | Date\|String | ✅ | | The timestamp to use for the footer text. When supplying a string, the format must be `01/31/2000`. |

### Notes

To ensure the embed gets displayed correctly inside your message, be sure to give it the proper `slot` attribute.

<div is="discord-messages">
	<discord-message>
		Hi, I'm part of the normal message content.
		<discord-embed slot="embeds" color="#0099ff">
			Hi, I'm part of the embed message content.
		</discord-embed>
	</discord-message>
</div>

```html
<discord-message>
	Hi, I'm part of the normal message content.
	<discord-embed slot="embeds" color="#0099ff">
		Hi, I'm part of the embed message content.
	</discord-embed>
</discord-message>
```

## EmbedFields

A wrapper for any child `<embed-field>` components. Must be used in order for fields to display properly.

### Notes

To ensure the embed fields gets displayed correctly inside your embed, be sure to give it the proper `slot` attribute.

```html
<discord-embed slot="embeds">
	Hi, I'm part of the embed message content.
	<embed-fields slot="fields">
		<!-- Embed fields go here -->
	</embed-fields>
</discord-embed>
```

## EmbedField

An embed field component.

### Properties

| Prop | Type | Optional | Default Value | Description |
| --- | --- | --- | --- | --- |
| title | String | ❌ | | The field's title. |
| inline | Boolean | ✅ | `false` | Whether this field should be displayed inline or not. |

### Notes

At least 2 consecutive fields need to be marked as inline in order for them to actually display next to each other. The maximum amount of inline fields is 3, and drops to 2 if an embed thumbnail is used.

<div is="discord-messages">
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
</div>

```html
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
```
