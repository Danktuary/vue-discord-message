import DiscordMessages from './components/DiscordMessages.vue';
import DiscordMessage from './components/DiscordMessage.vue';
import Mention from './components/Mention.vue';

const VueDiscordMessage = {

	install(Vue) {
		Vue.component('discord-messages', DiscordMessages);
		Vue.component('discord-message', DiscordMessage);
		Vue.component('mention', Mention);
	},

};

export default VueDiscordMessage;
