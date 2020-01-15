<template>
	<div :class="layout" class="discord-messages">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'DiscordMessages',
	props: {
		lightTheme: Boolean,
		compactMode: Boolean,
	},
	computed: {
		layout() {
			const options = this.$root.$discordMessage;
			const lightTheme = this.lightTheme || options.defaultTheme === 'light';
			const compactMode = this.compactMode || options.defaultMode === 'compact';

			return {
				'discord-light-theme': lightTheme,
				'discord-compact-mode': compactMode,
			};
		},
	},
};
</script>

<style>
.discord-messages {
	color: #fff;
	background-color: #36393e;
	font-size: 16px;
	font-family: sans-serif;
	padding: 2px 8px;
	line-height: 170%;
	border: 1px solid rgba(255, 255, 255, 0.05);
}

.discord-messages.discord-light-theme {
	color: #747f8d;
	background-color: #f7f7f7;
	border-color: #dedede;
}
</style>
