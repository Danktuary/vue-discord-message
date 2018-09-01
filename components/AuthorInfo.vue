<template>
	<span class="author-info">
		<span :style="{ color: roleColor }" class="author-username">
			<slot></slot>
		</span>
		<span v-if="bot" class="bot-tag">
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
.author-info {
	display: flex;
	align-items: center;
	font-size: 15px;
}

.author-info .author-username {
	font-size: 1.1em;
	font-weight: 500;
	letter-spacing: 0.5px;
}

.discord-light-theme .author-info .author-username {
	color: #23262a;
}

.author-info .bot-tag {
	background-color: #7289da;
	font-size: 0.65em;
	margin-left: 5px;
	padding: 3px;
	border-radius: 3px;
	line-height: 100%;
	text-transform: uppercase;
}

.discord-light-theme .author-info .bot-tag {
	color: #fff;
}

.compact-mode .author-info {
	display: inline-flex;
	flex-direction: row-reverse;
}

.compact-mode .author-info .bot-tag {
	margin-left: 0;
	margin-right: 5px;
	padding-left: 3px;
	padding-right: 3px;
	font-size: 0.6em;
}
</style>
