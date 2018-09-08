<template>
	<div class="discord-embed">
		<div :style="{ 'background-color': color }" class="left-border"></div>
		<div class="embed-container">
			<div class="embed-content">
				<div>
					<div v-if="author.name" class="embed-author">
						<img v-if="author.image" :src="author.image" alt="" class="author-image" />
						<a v-if="author.url" :href="author.url" target="_blank">
							{{ author.name }}
						</a>
						<span v-else>
							{{ author.name }}
						</span>
					</div>
					<div v-if="title" class="embed-title">
						<a v-if="url" :href="url" target="_blank">
							{{ title }}
						</a>
						<span v-else>
							{{ title }}
						</span>
					</div>
					<div class="embed-description">
						<slot></slot>
					</div>
					<slot name="fields"></slot>
					<img v-if="image" :src="image" class="embed-image" alt="" />
				</div>
				<img v-if="thumbnail" :src="thumbnail" alt="" class="embed-thumbnail" />
			</div>
			<div v-if="showFooter" class="embed-footer">
				<img v-if="showFooterImage" :src="footerImage" alt="" class="footer-image" />
				<span>
					<slot name="footer"></slot>
					<span v-if="showFooterSeparator" class="footer-separator">
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
export default {
	name: 'DiscordEmbed',

	filters: {
		formatDate(value) {
			if (!(value instanceof Date)) return value;
			return `${value.getMonth() + 1}/${value.getDate()}/${value.getFullYear()}`;
		},

		padZeroes(value) {
			const [month, day, year] = value.split('/');
			return `${month.padStart(2, 0)}/${day.padStart(2, 0)}/${year}`;
		},
	},

	props: {
		color: String,
		author: {
			type: Object,
			default() {
				return {};
			},
		},
		title: String,
		url: String,
		thumbnail: String,
		image: String,
		footerImage: String,
		timestamp: {
			type: [Date, String],
			validator(value) {
				const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

				if (typeof value === 'string' && !dateRegex.test(value)) {
					return false;
				}

				return true;
			},
		},
	},

	computed: {
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
	color: rgba(255, 255, 255, 0.6);
	display: flex;
	margin-top: 8px;
	margin-bottom: 8px;
	font-size: 13px;
	line-height: 150%;
}

.discord-light-theme .discord-embed {
	color: rgba(79, 83, 91, 0.9);
}

.discord-embed a {
	color: #0096cf;
	text-decoration: none;
}

.discord-light-theme .discord-embed a {
	color: #00b0f4;
}

.discord-embed a:hover {
	text-decoration: underline;
}

.discord-embed .left-border {
	background-color: #4f545c;
	flex-shrink: 0;
	width: 4px;
	border-radius: 3px 0 0 3px;
}

.discord-light-theme .discord-embed .left-border {
	background-color: #cacbce;
}

.discord-embed .embed-container {
	background-color: rgba(46, 48, 54, 0.3);
	display: flex;
	flex-direction: column;
	max-width: 520px;
	padding: 8px 10px;
	border: 1px solid rgba(46, 48, 54, 0.6);
	border-radius: 0 3px 3px 0;
}

.discord-light-theme .discord-embed .embed-container {
	background-color: rgba(249, 249, 249, 0.3);
	border-color: rgba(205, 205, 205, 0.3);
}

.discord-embed .embed-content {
	display: flex;
}

.discord-embed .embed-thumbnail {
	width: 80px;
	height: 80px;
	margin-left: 1em;
	border-radius: 3px;
}

.discord-embed .embed-author {
	color: #fff;
	display: flex;
	font-weight: 500;
}

.discord-light-theme .discord-embed .embed-author {
	color: #4f545c;
}

.discord-embed .embed-author a {
	color: #fff;
}

.discord-light-theme .discord-embed .embed-author a {
	color: #4f545c;
}

.discord-embed .embed-author .author-image {
	width: 20px;
	height: 20px;
	margin-right: 8px;
	border-radius: 50%;
}
.discord-embed .embed-title {
	color: #fff;
	font-weight: 500;
}

.discord-embed .embed-image {
	max-width: 100%;
	margin-top: 8px;
	border-radius: 3px;
}

.discord-embed .embed-footer {
	display: flex;
	align-items: center;
	font-size: 0.85em;
	margin-top: 8px;
}

.discord-embed .embed-footer .footer-image {
	flex-shrink: 0;
	width: 20px;
	height: 20px;
	margin-right: 8px;
	border-radius: 50%;
}

.discord-embed .embed-footer .footer-separator {
	color: #4f545c;
	font-weight: 700;
	margin: 0 5px;
}
</style>
