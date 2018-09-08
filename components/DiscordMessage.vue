<template>
	<div class="discord-message">
		<div class="author-avatar">
			<img :src="avatarSrc" :alt="author" />
		</div>
		<div class="message-content">
			<div v-if="!compactMode">
				<author-info :bot="bot" :role-color="roleColor">
					{{ author }}
				</author-info>
			</div>
			<div :class="{ 'highlight-mention': highlightMention }" class="message-body">
				<author-info v-if="compactMode" :bot="bot" :role-color="roleColor">
					{{ author }}
				</author-info>
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
import AuthorInfo from './AuthorInfo.vue';

export default {
	name: 'DiscordMessage',

	components: { AuthorInfo },

	props: {
		author: {
			type: String,
			default: 'User',
		},
		avatar: String,
		bot: Boolean,
		roleColor: String,
	},

	data() {
		return {
			avatarSrc: '',
			highlightMention: false,
			compactMode: false,
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
		this.compactMode = this.$parent.$props.compactMode;
	},

	mounted() {
		this.highlightMention = this.$children.some(child => {
			return child.$options.name === 'Mention' && child.$props.highlight && child.$props.type !== 'channel';
		});
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

.discord-message .message-content {
	width: 100%;
}

.discord-message .message-body {
	font-size: 0.9em;
	position: relative;
}

.compact-mode .discord-message {
	padding-top: 0.5em;
	padding-bottom: 0.5em;
}

.compact-mode .author-avatar {
	display: none;
}

.compact-mode .message-body {
	margin-left: 0.25em;
}
</style>
