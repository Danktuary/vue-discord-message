import DiscordMessages from './components/DiscordMessages.vue';
import DiscordMessage from './components/DiscordMessage.vue';

const VueDiscordMessage = {

	install(Vue) {
		Vue.component('discord-messages', DiscordMessages);
		Vue.component('discord-message', DiscordMessage);
	},

};

export default VueDiscordMessage;
