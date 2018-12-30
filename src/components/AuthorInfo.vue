<template>
	<span class="discord-author-info">
		<span :style="{ color: roleColor }" class="discord-author-username">
			<slot></slot>
		</span>
		<span v-if="bot" class="discord-bot-tag">
			Bot
		</span>
	</span>
</template>

<script>
export default {
	name: 'AuthorInfo',

	props: {
		bot: Boolean,
		roleColor: String,
	},
};
</script>

<style>
.discord-message .discord-author-info {
	display: inline-flex;
	align-items: center;
	font-size: 15px;
}

.discord-message .discord-author-info .discord-author-username {
	font-size: 1.1em;
	font-weight: 500;
	letter-spacing: 0.5px;
}

.discord-light-theme .discord-message .discord-author-info .discord-author-username {
	color: #23262a;
}

.discord-message .discord-author-info .discord-bot-tag {
	background-color: #7289da;
	font-size: 0.65em;
	margin-left: 5px;
	padding: 3px;
	border-radius: 3px;
	line-height: 100%;
	text-transform: uppercase;
}

.discord-light-theme .discord-message .discord-author-info .discord-bot-tag {
	color: #fff;
}

.discord-compact-mode .discord-message .discord-author-info {
	display: inline-flex;
	flex-direction: row-reverse;
}

.discord-compact-mode .discord-message .discord-author-info .discord-bot-tag {
	margin-left: 0;
	margin-right: 5px;
	padding-left: 3px;
	padding-right: 3px;
	font-size: 0.6em;
}
</style>
