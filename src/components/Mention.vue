<template>
	<span :style="colorStyle" class="discord-mention">
		{{ mentionCharacter }}<slot>{{ defaultContent }}</slot>
	</span>
</template>

<script>
import hexToRgba from 'hex-to-rgba';

export default {
	name: 'Mention',
	props: {
		highlight: Boolean,
		color: String,
		type: {
			type: String,
			'default': 'user',
			validator: value => ['user', 'channel', 'role'].includes(value),
		},
		profile: String,
	},
	computed: {
		defaultContent() {
			const { type, profile } = this;
			const user = this.$root.$discordMessage.profiles[profile] || {};
			return type === 'user' && user.author
				? user.author
				: (type === 'channel' ? type : type.charAt(0).toUpperCase() + type.slice(1));
		},
		mentionCharacter() {
			return this.type === 'channel' ? '#' : '@';
		},
		roleColor() {
			const profile = this.$root.$discordMessage.profiles[this.profile] || {};
			return profile.roleColor || this.color;
		},
		colorStyle() {
			if (!this.roleColor || this.type !== 'role') return {};

			return {
				color: this.roleColor,
				'background-color': hexToRgba(this.roleColor, 0.1),
			};
		},
	},
	mounted() {
		if (this.roleColor && this.type === 'role') {
			this.$el.addEventListener('mouseover', this.setHoverColor);
			this.$el.addEventListener('mouseout', this.resetHoverColor);
		}
	},
	beforeDestroy() {
		if (this.roleColor && this.type === 'role') {
			this.$el.removeEventListener('mouseover', this.setHoverColor);
			this.$el.removeEventListener('mouseout', this.resetHoverColor);
		}
	},
	methods: {
		setHoverColor() {
			this.$el.style.backgroundColor = hexToRgba(this.roleColor, 0.3);
		},
		resetHoverColor() {
			this.$el.style.backgroundColor = hexToRgba(this.roleColor, 0.1);
		},
	},
};
</script>

<style>
.discord-message .discord-mention {
	color: #7289da;
	background-color: rgba(114, 137, 218, 0.1);
	font-weight: 500;
	padding: 0 1px;
}

.discord-message .discord-mention:hover {
	color: #fff;
	background-color: rgba(114, 137, 218, 0.7);
}

.discord-message.discord-highlight-mention {
	background-color: rgba(250, 166, 26, 0.05);
	position: relative;
}

.discord-message.discord-highlight-mention::before {
	content: "";
	background-color: #faa61a;
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 2px;
}

.discord-message.discord-highlight-mention:hover {
	background-color: rgba(250, 166, 26, 0.1);
}

.discord-message.discord-highlight-mention .discord-mention {
	background-color: unset !important;
}

.discord-message.discord-highlight-mention .discord-mention:hover {
	color: #7289da;
	text-decoration: underline;
}
</style>
