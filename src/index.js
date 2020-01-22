import DiscordMessages from './components/DiscordMessages.vue';
import DiscordMessage from './components/DiscordMessage.vue';
import DiscordEmbed from './components/DiscordEmbed.vue';
import EmbedFields from './components/EmbedFields.vue';
import EmbedField from './components/EmbedField.vue';
import Mention from './components/Mention.vue';

export default {
	install(Vue, options = {}) {
		const { avatars = {}, componentNames = {}, profiles = {} } = options;

		const discordAvatars = {
			blue: 'https://cdn.discordapp.com/attachments/654503812593090602/665721745466195978/blue.png',
			gray: 'https://cdn.discordapp.com/attachments/654503812593090602/665721746569166849/gray.png',
			green: 'https://cdn.discordapp.com/attachments/654503812593090602/665721748431306753/green.png',
			orange: 'https://cdn.discordapp.com/attachments/654503812593090602/665721750201434138/orange.png',
			red: 'https://cdn.discordapp.com/attachments/654503812593090602/665721752277483540/red.png',
		};

		Vue.prototype.$discordMessage = {
			avatars: Object.assign(discordAvatars, avatars, {
				'default': discordAvatars[avatars.default] || avatars.default || discordAvatars.blue,
			}),
			profiles,
			defaultTheme: options.defaultTheme,
			defaultMode: options.defaultMode,
		};

		if (!options.disableFont) require('./css/fonts.css');

		Vue.component(componentNames['discord-messages'] || 'discord-messages', DiscordMessages);
		Vue.component(componentNames['discord-message'] || 'discord-message', DiscordMessage);
		Vue.component(componentNames['discord-embed'] || 'discord-embed', DiscordEmbed);
		Vue.component(componentNames['embed-fields'] || 'embed-fields', EmbedFields);
		Vue.component(componentNames['embed-field'] || 'embed-field', EmbedField);
		Vue.component(componentNames.mention || 'mention', Mention);
	},
};
