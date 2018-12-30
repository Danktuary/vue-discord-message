<template>
	<div :class="{ 'discord-inline-field': inline }" class="discord-embed-field">
		<div class="discord-field-title">{{ title }}</div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'EmbedField',

	props: {
		title: {
			type: String,
			required: true,
		},
		inline: Boolean,
	},
};
</script>

<style>
.discord-embed .discord-embed-field {
	min-width: 100%;
	margin-top: 5px;
}

.discord-embed .discord-embed-field.discord-inline-field {
	flex-grow: 1;
	flex-basis: auto;
	min-width: 150px;
}

.discord-embed .discord-embed-field .discord-field-title {
	color: #fff;
	font-weight: 500;
	margin-bottom: 5px;
}

.discord-light-theme .discord-embed .discord-embed-field .discord-field-title {
	color: rgba(79, 83, 91, 0.9);
}
</style>
