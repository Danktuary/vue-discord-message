## Installation 

### Package managers

If you're using a package manager, you can install it like normal.

```bash
yarn add vue-discord-message
# or npm install vue-discord-message
```

And then register it as a Vue plugin.

```js
import Vue from 'vue';
import VueDiscordMessage from 'vue-discord-message';

Vue.use(VueDiscordMessage);
```

### Browser build

If you're using a browser build, you can pull it in via unpkg.

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-discord-message"></script>

<script>
Vue.use(VueDiscordMessage);
</script>
```

There are also options you can pass to the 2nd parameter that you can read about [here](/plugin-options.html).

## Usage

The syntax is kept fairly simple. Here's a basic example of a regular conversation:

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
</discord-messages>
```

For detailed documentation on all the available components, check the [components reference](/components-reference.html) page and the [examples](/examples.html).
