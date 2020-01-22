# Vue Discord Message

Vue components to easily build and display fake Discord messages on your webpages.

If you want to use web components instead, use [wc-discord-message](https://github.com/Danktuary/wc-discord-message)!

```sh
yarn add vue-discord-message
# or npm install vue-discord-messgae
# browser build also available: https://unpkg.com/vue-discord-message
```

```js
import Vue from 'vue';
import VueDiscordMessage from 'vue-discord-message';

Vue.use(VueDiscordMessage);
```

![vue-discord-message preview](https://i.imgur.com/gRD45Fq.png)

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

## Features

* Design modeled after [Discord](https://discordapp.com/) itself
* Comfy and compact mode support
* Dark and light themes support
* Set the message author's username, avatar (use defaults or provide your own), role color, and "bot" tag status
* Display fake user, role, and channel mentions
* Complete embed support
* Simple syntax!

## Docs

Check out the full documentation for full component usage and examples [here](https://vue-discord-message.netlify.com/).

## Upgrading to v4

In vue-discord-message v3, the [profile shortcuts plugin option](https://vue-discord-message.netlify.com/plugin-options.html#profile-shortcuts) is set via a `profiles` object property in your `Vue.use()` call, and then used as `<discord-message user="id">`. In v4, the `user` prop has been renamed to `profile`.

The Mention component has also been updated to have default content for the default slot. If the default slot is left empty, the mention will be rendered as `'User'`, `'Role'`, or `'channel`', depending on the `type` prop given.
It now accepts a `profile` prop as well. This will either use the profile's `author` property to set the default slot content (if empty) , or use the profile's `roleColor` property to set the color for role pings.


```html
<discord-messages>
	<discord-message>Hey there, <mention />!</discord-message> <!-- "Hey there, @User! -->
	<discord-message>Hey there, <mention profile="sanc" />!</discord-message> <!-- "Hey there, @Sanctuary! -->
	<discord-message>Hey there, <mention profile="sanc" type="role" />!</discord-message> <!-- "Hey there, @Role! (colored ping) -->
</discord-messages>
```

The Discord avatar shortcut images are also no longer bundled with this package and are [now served as CDN links](https://vue-discord-message.netlify.com/plugin-options.html#avatar-shortcuts). This allows for a much smaller package size! 🎉
