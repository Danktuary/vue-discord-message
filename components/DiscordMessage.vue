<template>
	<div class="discord-message">
		<div class="author-avatar">
			<img :src="avatarSrc" :alt="author" />
		</div>
		<div class="message-content">
			<div class="author-header">
				<span class="author-username">{{ author }}</span>
				<span v-if="bot" class="bot-tag">Bot</span>
			</div>
			<div :class="{ 'author-mentioned': authorMentioned }" class="message-body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DiscordMessage',

	props: {
		author: {
			type: String,
			default: 'User',
		},
		avatar: String,
		bot: Boolean,
	},

	data() {
		return {
			avatarSrc: '',
			authorMentioned: false,
		};
	},

	created() {
		const defaultAvatars = {
			blue: require('../avatars/blue.png'),
			gray: require('../avatars/gray.png'),
			green: require('../avatars/green.png'),
			orange: require('../avatars/orange.png'),
			red: require('../avatars/red.png'),
		};

		this.avatarSrc = defaultAvatars[this.avatar] || this.avatar || defaultAvatars.blue;
	},

	mounted() {
		this.authorMentioned = this.$children.some(child => child.$props.authorMentioned);
	},
};
</script>

<style>
.discord-message {
	display: flex;
	padding: 1em 0.5em;
	border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.discord-light-theme .discord-message {
	border-color: #eceeef;
}

.discord-message:last-of-type {
	border-bottom-width: 0;
}

.discord-message .author-avatar {
	margin-right: 1rem;
	min-width: 40px;
}

.discord-message .author-avatar img {
	width: 40px;
	height: 40px;
	border-radius: 50%;
}

.discord-message .author-header {
	display: flex;
	align-items: center;
	font-size: 15px;
}

.discord-message .author-header .author-username {
	font-size: 1.1em;
	font-weight: 500;
	letter-spacing: 0.5px;
}

.discord-light-theme .discord-message .author-header .author-username {
	color: #23262a;
}

.discord-message .author-header .bot-tag {
	background-color: #7289da;
	font-size: 0.65em;
	margin-left: 5px;
	padding: 3px;
	border-radius: 3px;
	line-height: 100%;
	text-transform: uppercase;
}

.discord-light-theme .discord-message .author-header .bot-tag {
	color: #fff;
}

.discord-message .message-body {
	font-size: 0.9em;
	position: relative;
}
</style>
