---
sidebar: auto
---

# Examples

## Normal conversation

<div is="discord-messages">
	<discord-message>
		Hey guys, I'm new here! Glad to be able to join you all!
	</discord-message>
	<discord-message author="Dawn" avatar="red">
		Hi, I'm new here too!
	</discord-message>
	<discord-message author="Sanctuary" avatar="https://i.imgur.com/0TeacfY.png" role-color="#0099ff">
		Hey, <mention>User</mention> and <mention>Dawn</mention>. Welcome to our server!
	</discord-message>
	<discord-message profile="twelve">
		Hello everyone! How's it going?
	</discord-message>
	<discord-message author="User">
		Thank you <mention :highlight="true">Sanctuary</mention>!
	</discord-message>
	<discord-message author="Yotsuba" avatar="https://i.imgur.com/amw0MGJ.png">
		I'm doing well, <mention>Twelve</mention>. What about yourself?
	</discord-message>
	<discord-message profile="twelve">
		!8ball How am I doing today?
	</discord-message>
	<discord-message :bot="true" author="Rinon" avatar="https://i.imgur.com/axQ9wJl.png" role-color="violet">
		Yes.
	</discord-message>
</div>

```html
<discord-messages>
	<discord-message>
		Hey guys, I'm new here! Glad to be able to join you all!
	</discord-message>
	<discord-message author="Dawn" avatar="red">
		Hi, I'm new here too!
	</discord-message>
	<discord-message author="Sanctuary" avatar="https://i.imgur.com/0TeacfY.png" role-color="#0099ff">
		Hey, <mention>User</mention> and <mention>Dawn</mention>. Welcome to our server!
	</discord-message>
	<discord-message profile="twelve">
		Hello everyone! How's it going?
	</discord-message>
	<discord-message author="User">
		Thank you <mention :highlight="true">Sanctuary</mention>!
	</discord-message>
	<discord-message author="Yotsuba" avatar="https://i.imgur.com/amw0MGJ.png">
		I'm doing well, <mention>Twelve</mention>. What about yourself?
	</discord-message>
	<discord-message profile="twelve">
		!8ball How am I doing today?
	</discord-message>
	<discord-message :bot="true" author="Rinon" avatar="https://i.imgur.com/axQ9wJl.png" role-color="violet">
		Yes.
	</discord-message>
</discord-messages>
```

```js
Vue.use(VueDiscordMessage, {
	profiles: {
		twelve: {
			author: 'Twelve',
			avatar: 'https://i.imgur.com/Mc0F0Hf.png',
			roleColor: '#15b153',
		},
	},
});
```

## Light mode

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

## Compact mode

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
</div>
```

## Mentions

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

## Complete embed

<div is="discord-messages">
	<discord-message author="Tutorial Bot" avatar="blue" :bot="true">
		<discord-embed
			slot="embeds"
			color="#0099ff"
			title="Some title"
			url="https://discord.js.org/"
			thumbnail="https://i.imgur.com/wSTFkRM.png"
			image="https://i.imgur.com/wSTFkRM.png"
			footer-image="https://i.imgur.com/wSTFkRM.png"
			timestamp="01/01/2018"
			author-name="Some name"
			author-image="https://i.imgur.com/wSTFkRM.png"
			author-url="https://discord.js.org/"
		>
			Some description here
			<embed-fields>
				<embed-field title="Regular field title">
					Some value here
				</embed-field>
				<embed-field title="​">
					​
				</embed-field>
				<embed-field :inline="true" title="Inline field title">
					Some value here
				</embed-field>
				<embed-field :inline="true" title="Inline field title">
					Some value here
				</embed-field>
				<embed-field :inline="true" title="Inline field title">
					Some value here
				</embed-field>
			</embed-fields>
			<span slot="footer">Some footer text here</span>
		</discord-embed>
	</discord-message>
</div>

```html
<discord-messages>
	<discord-message>
		<discord-embed
			slot="embeds"
			color="#0099ff"
			title="Some title"
			url="https://discord.js.org/"
			thumbnail="https://i.imgur.com/wSTFkRM.png"
			image="https://i.imgur.com/wSTFkRM.png"
			footer-image="https://i.imgur.com/wSTFkRM.png"
			timestamp="01/01/2018"
			author-name="Some name"
			author-image="https://i.imgur.com/wSTFkRM.png"
			author-url="https://discord.js.org/"
		>
			Some description here
			<embed-fields slot="fields">
				<embed-field title="Regular field title">
					Some value here
				</embed-field>
				<embed-field :inline="true" title="Inline field title">
					Some value here
				</embed-field>
				<embed-field :inline="true" title="Inline field title">
					Some value here
				</embed-field>
				<embed-field :inline="true" title="Inline field title">
					Some value here
				</embed-field>
			</embed-fields>
			<span slot="footer">Some footer text here</span>
		</discord-embed>
	</discord-message>
</discord-messages>
```

## Embed fields

### Regular fields

<div is="discord-messages">
	<discord-message>
		<discord-embed slot="embeds">
			<embed-fields slot="fields">
				<embed-field title="Field title">
					Some value here. Some value here. Some value here
				</embed-field>
				<embed-field title="Field title">
					Some value here. Some value here. Some value here
				</embed-field>
				<embed-field title="Field title">
					Some value here. Some value here. Some value here
				</embed-field>
			</embed-fields>
		</discord-embed>
	</discord-message>
</div>

```html
<discord-messages>
	<discord-message>
		<discord-embed slot="embeds">
			<embed-fields slot="fields">
				<embed-field title="Field title">
					Some value here. Some value here. Some value here
				</embed-field>
				<embed-field title="Field title">
					Some value here. Some value here. Some value here
				</embed-field>
				<embed-field title="Field title">
					Some value here. Some value here. Some value here
				</embed-field>
			</embed-fields>
		</discord-embed>
	</discord-message>
</discord-messages>
```

### Inline fields

<div is="discord-messages">
	<discord-message>
		<discord-embed slot="embeds">
			<embed-fields slot="fields">
				<embed-field title="Inline field title" :inline="true">
					Some value here
				</embed-field>
				<embed-field title="Inline field title" :inline="true">
					Some value here
				</embed-field>
				<embed-field title="Inline field title" :inline="true">
					Some value here
				</embed-field>
			</embed-fields>
		</discord-embed>
	</discord-message>
</div>

```html
<discord-messages>
	<discord-message>
		<discord-embed slot="embeds">
			<embed-fields slot="fields">
				<embed-field title="Inline field title" :inline="true">
					Some value here
				</embed-field>
				<embed-field title="Inline field title" :inline="true">
					Some value here
				</embed-field>
				<embed-field title="Inline field title" :inline="true">
					Some value here
				</embed-field>
			</embed-fields>
		</discord-embed>
	</discord-message>
</discord-messages>
```

### Inline fields with a thumbnail

<div is="discord-messages">
	<discord-message>
		<discord-embed slot="embeds" thumbnail="https://i.imgur.com/wSTFkRM.png">
			<embed-fields slot="fields">
				<embed-field title="Inline field title" :inline="true">
					Some value here
				</embed-field>
				<embed-field title="Inline field title" :inline="true">
					Some value here
				</embed-field>
				<embed-field title="Inline field title" :inline="true">
					Some value here
				</embed-field>
			</embed-fields>
		</discord-embed>
	</discord-message>
</div>

```html
<discord-messages>
	<discord-message>
		<discord-embed slot="embeds" thumbnail="https://i.imgur.com/wSTFkRM.png">
			<embed-fields slot="fields">
				<embed-field title="Inline field title" :inline="true">
					Some value here
				</embed-field>
				<embed-field title="Inline field title" :inline="true">
					Some value here
				</embed-field>
				<embed-field title="Inline field title" :inline="true">
					Some value here
				</embed-field>
			</embed-fields>
		</discord-embed>
	</discord-message>
</discord-messages>
```
