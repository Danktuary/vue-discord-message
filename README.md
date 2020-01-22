# Vue Discord Message

Vue components to easily build and display fake Discord messages on your webpages.

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
