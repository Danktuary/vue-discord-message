<template>
	<div class="embed-fields">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'EmbedFields',
};
</script>

<style>
.discord-embed .embed-fields {
	display: flex;
	flex-wrap: wrap;
	margin-top: 5px;
}
</style>
