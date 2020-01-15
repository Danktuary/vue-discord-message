<template>
	<div class="discord-embed">
		<div :style="{ 'background-color': color }" class="discord-left-border"></div>
		<div class="discord-embed-container">
			<div class="discord-embed-content">
				<div>
					<div v-if="author.name" class="discord-embed-author">
						<img v-if="author.image" :src="author.image" alt="" class="discord-author-image" />
						<a v-if="author.url" :href="author.url" target="_blank">
							{{ author.name }}
						</a>
						<span v-else>
							{{ author.name }}
						</span>
					</div>
					<div v-if="title" class="discord-embed-title">
						<a v-if="url" :href="url" target="_blank">
							{{ title }}
						</a>
						<span v-else>
							{{ title }}
						</span>
					</div>
					<div class="discord-embed-description">
						<slot></slot>
					</div>
					<slot name="fields"></slot>
					<img v-if="image" :src="image" class="discord-embed-image" alt="" />
				</div>
				<img v-if="thumbnail" :src="thumbnail" alt="" class="discord-embed-thumbnail" />
			</div>
			<div v-if="showFooter" class="discord-embed-footer">
				<img v-if="showFooterImage" :src="footerImage" alt="" class="discord-footer-image" />
				<span>
					<slot name="footer"></slot>
					<span v-if="showFooterSeparator" class="discord-footer-separator">
						&bull;
					</span>
					<span v-if="timestamp">
						{{ timestamp | formatDate | padZeroes }}
					</span>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import filters from '../util/filters.js';
import validators from '../util/validators.js';

export default {
	name: 'DiscordEmbed',
	filters: filters.dates,
	props: {
		color: String,
		authorName: String,
		authorImage: String,
		authorUrl: String,
		title: String,
		url: String,
		thumbnail: String,
		image: String,
		footerImage: String,
		timestamp: {
			type: [Date, String],
			validator: validators.dates.validator,
		},
	},
	computed: {
		author() {
			return {
				name: this.authorName,
				image: this.authorImage,
				url: this.authorUrl,
			};
		},
		showFooter() {
			return this.$slots.footer || this.timestamp;
		},
		showFooterImage() {
			return this.$slots.footer && this.footerImage;
		},
		showFooterSeparator() {
			return this.$slots.footer && this.timestamp;
		},
	},
};
</script>

<style>
.discord-embed {
	color: #dcddde;
	display: flex;
	margin-top: 8px;
	margin-bottom: 8px;
	font-size: 13px;
	line-height: 150%;
}

.discord-light-theme .discord-embed {
	color: #2e3338;
}

.discord-embed .discord-left-border {
	background-color: #202225;
	flex-shrink: 0;
	width: 4px;
	border-radius: 4px 0 0 4px;
}

.discord-light-theme .discord-embed .discord-left-border {
	background-color: #e3e5e8;
}

.discord-embed .discord-embed-container {
	background-color: #2f3136;
	display: flex;
	flex-direction: column;
	max-width: 520px;
	padding: 8px 16px 16px;
	border: 1px solid rgba(46, 48, 54, 0.6);
	border-radius: 0 4px 4px 0;
}

.discord-light-theme .discord-embed .discord-embed-container {
	background-color: rgba(249, 249, 249, 0.3);
	border-color: rgba(205, 205, 205, 0.3);
}

.discord-embed .discord-embed-content {
	display: flex;
}

.discord-embed .discord-embed-thumbnail {
	max-width: 80px;
	max-height: 80px;
	margin-left: 16px;
	margin-top: 8px;
	border-radius: 4px;
	object-fit: contain;
	object-position: top center;
}

.discord-embed .discord-embed-author {
	color: #fff;
	display: flex;
	align-items: center;
	font-weight: 500;
	margin-top: 8px;
}

.discord-light-theme .discord-embed .discord-embed-author {
	color: #4f545c;
}

.discord-embed .discord-embed-author a {
	color: #fff;
}

.discord-light-theme .discord-embed .discord-embed-author a {
	color: #4f545c;
}

.discord-embed .discord-embed-author .discord-author-image {
	width: 24px;
	height: 24px;
	margin-right: 8px;
	border-radius: 50%;
}

.discord-embed .discord-embed-title {
	color: #fff;
	font-size: 16px;
	font-weight: 600;
	margin-top: 8px;
}

.discord-embed .discord-embed-title a {
	color: #00b0f4;
	font-weight: 600;
}

.discord-embed .discord-embed-description {
	margin-top: 8px;
}

.discord-embed .discord-embed-image {
	max-width: 100%;
	margin-top: 16px;
	border-radius: 4px;
}

.discord-embed .discord-embed-footer {
	color: #72767d;
	display: flex;
	align-items: center;
	font-size: 0.85em;
	margin-top: 8px;
}

.discord-embed .discord-embed-footer .discord-footer-image {
	flex-shrink: 0;
	width: 20px;
	height: 20px;
	margin-right: 8px;
	border-radius: 50%;
}

.discord-embed .discord-embed-footer .discord-footer-separator {
	color: #3b3c42;
	font-weight: 700;
	margin: 0 4px;
}

.discord-light-theme .discord-embed .discord-embed-footer .discord-footer-separator {
	color: #e4e4e4;
}
</style>
