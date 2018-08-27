import DiscordMessages from './DiscordMessages.vue';
import DiscordMessage from './DiscordMessage.vue';

const VueDiscordMessage = {

	install(Vue) {
		Vue.component('discord-messages', DiscordMessages);
		Vue.component('discord-message', DiscordMessage);
	},

};

export default VueDiscordMessage;
