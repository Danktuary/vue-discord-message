<template>
	<div :class="{ 'inline-field': inline }" class="embed-field">
		<div class="field-title">{{ title }}</div>
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
.discord-embed .embed-field {
	min-width: 100%;
	margin-top: 5px;
}

.discord-embed .embed-field.inline-field {
	flex-grow: 1;
	flex-basis: auto;
	min-width: 150px;
}

.discord-embed .embed-field .field-title {
	color: #fff;
	font-weight: 500;
	margin-bottom: 5px;
}

.discord-light-theme .discord-embed .embed-field .field-title {
	color: rgba(79, 83, 91, 0.9);
}
</style>
