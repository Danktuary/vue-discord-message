<template>
	<div :class="{ 'discord-light-theme': lightTheme }" class="discord-messages">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'DiscordMessages',

	props: {
		lightTheme: Boolean,
	},
};
</script>

<style>
@import './css/fonts.css';

.discord-messages {
	color: #fff;
	background-color: #36393e;
	font-family: 'Roboto', sans-serif;
	padding: 0.1em 0.5em;
	line-height: 170%;
	border: 1px solid rgba(255, 255, 255, 0.05);
}

.discord-messages.discord-light-theme {
	color: #747f8d;
	background-color: #f7f7f7;
	border-color: #dedede;
}
</style>
