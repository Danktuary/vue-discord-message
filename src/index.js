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
			blue: require('./avatars/blue.png'),
			gray: require('./avatars/gray.png'),
			green: require('./avatars/green.png'),
			orange: require('./avatars/orange.png'),
			red: require('./avatars/red.png'),
		};

		discordAvatars.default = discordAvatars[avatars.default] || avatars.default || discordAvatars.blue;

		Vue.prototype.$discordMessage = {
			avatars: Object.assign(avatars, discordAvatars),
			profiles,
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
