<template>
	<div class="discord-message">
		<div class="discord-author-avatar">
			<img :src="avatarSrc" :alt="author" />
		</div>
		<div class="discord-message-content">
			<div v-if="!compactMode">
				<author-info :bot="bot" :role-color="roleColor">
					{{ author }}
				</author-info>
				<span v-if="timestamp" class="discord-message-timestamp">
					{{ timestamp | formatDate | padZeroes }}
				</span>
			</div>
			<div :class="{ 'discord-highlight-mention': highlightMention }" class="discord-message-body">
				<author-info v-if="compactMode" :bot="bot" :role-color="roleColor">
					{{ author }}
				</author-info>
				<slot></slot>
				<span v-if="edited" class="discord-message-edited">(edited)</span>
			</div>
			<slot name="embeds"></slot>
		</div>
	</div>
</template>

<script>
import AuthorInfo from './AuthorInfo.vue';
import filters from '../util/filters.js';
import validators from '../util/validators.js';

export default {
	name: 'DiscordMessage',

	components: { AuthorInfo },

	filters: filters.dates,

	props: {
		author: {
			type: String,
			default: 'User',
		},
		avatar: String,
		bot: Boolean,
		edited: Boolean,
		roleColor: String,
		timestamp: {
			type: [Date, String],
			default: () => new Date(),
			validator: validators.dates.validator,
		},
	},

	data() {
		return {
			avatarSrc: '',
			highlightMention: false,
			compactMode: false,
		};
	},

	created() {
		const defaultAvatars = this.$root.$discordAvatars;

		this.avatarSrc = defaultAvatars[this.avatar] || this.avatar || defaultAvatars.default;
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
	font-size: 0.9em;
	padding: 1em 0.5em;
	border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.discord-light-theme .discord-message {
	border-color: #eceeef;
}

.discord-message:last-of-type {
	border-bottom-width: 0;
}

.discord-message a {
	color: #0096cf;
	font-weight: normal;
	text-decoration: none;
}

.discord-light-theme .discord-message a {
	color: #00b0f4;
}

.discord-message a:hover {
	text-decoration: underline;
}

.discord-message .discord-author-avatar {
	margin-right: 1rem;
	min-width: 40px;
}

.discord-message .discord-author-avatar img {
	width: 40px;
	height: 40px;
	border-radius: 50%;
}

.discord-message .discord-message-timestamp {
	color: #fff3;
	font-size: 0.75rem;
	margin-left: 0.3rem;
}

.discord-message .discord-message-edited {
	color: #fff3;
	font-size: 10px;
}

.discord-message .discord-message-content {
	width: 100%;
}

.discord-message .discord-message-body {
	position: relative;
}

.discord-compact-mode .discord-message {
	padding-top: 0.5em;
	padding-bottom: 0.5em;
}

.discord-compact-mode .discord-author-avatar {
	display: none;
}

.discord-compact-mode .discord-message-body {
	margin-left: 0.25em;
}
</style>
