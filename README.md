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
