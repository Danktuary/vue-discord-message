import DiscordMessages from './components/DiscordMessages.vue';
import DiscordMessage from './components/DiscordMessage.vue';
import DiscordEmbed from './components/DiscordEmbed.vue';
import EmbedFields from './components/EmbedFields.vue';
import EmbedField from './components/EmbedField.vue';
import Mention from './components/Mention.vue';

const VueDiscordMessage = {
	install(Vue, { avatars } = {}) {
		Vue.prototype.$discordAvatars = Object.assign(avatars || {}, {
			blue: require('./avatars/blue.png'),
			gray: require('./avatars/gray.png'),
			green: require('./avatars/green.png'),
			orange: require('./avatars/orange.png'),
			red: require('./avatars/red.png'),
		});

		Vue.component('discord-messages', DiscordMessages);
		Vue.component('discord-message', DiscordMessage);
		Vue.component('discord-embed', DiscordEmbed);
		Vue.component('embed-fields', EmbedFields);
		Vue.component('embed-field', EmbedField);
		Vue.component('mention', Mention);
	},
};

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueDiscordMessage);
}

export default VueDiscordMessage;
