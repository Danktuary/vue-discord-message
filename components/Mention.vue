<template>
	<span
		:style="colorStyle"
		class="discord-mention"
		@mouseover="setHoverColor"
		@mouseout="resetHoverColor"
	>
		{{ mentionCharacter }}<slot></slot>
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
			default: 'user',
			validator(value) {
				return ['user', 'channel', 'role'].includes(value);
			},
		},

	},

	computed: {
		mentionCharacter() {
			return this.type === 'channel' ? '#' : '@';
		},

		colorStyle() {
			if (!this.color || this.type !== 'role') {
				return {};
			}

			return {
				'color': this.color,
				'background-color': hexToRgba(this.color, 0.1),
			};
		},
	},

	methods: {
		setHoverColor() {
			if (!this.color || this.type !== 'role') return;
			this.$el.style.backgroundColor = hexToRgba(this.color, 0.3);
		},

		resetHoverColor() {
			if (!this.color || this.type !== 'role') return;
			this.$el.style.backgroundColor = hexToRgba(this.color, 0.1);
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
	cursor: pointer;
}

.discord-message .discord-mention:hover {
	color: #fff;
	background-color: rgba(114, 137, 218, 0.7);
}

.discord-message .message-body.highlight-mention {
	background-color: rgba(250, 166, 26, 0.1);
	border-radius: 0 3px 3px 0;
	margin: -0.1rem -0.2rem 0.1rem;
	padding-left: 0.2rem;
	padding-right: 0.3rem;
}

.discord-message .message-body.message-body.highlight-mention::before {
	content: " ";
	background-color: rgba(250, 166, 26, 0.2);
	position: absolute;
	top: 0;
	left: -6px;
	bottom: 0;
	width: 2px;
	border-left: 4px solid #faa61a;
	border-radius: 3px 0 0 3px;
}

.discord-message .message-body.highlight-mention .discord-mention {
	background-color: unset !important;
}

.discord-message .message-body.highlight-mention .discord-mention:hover {
	color: #7289da;
	text-decoration: underline;
}
</style>
