module.exports = {
	productionSourceMap: false,
	css: { extract: false },
	configureWebpack: {
		output: {
			library: 'VueDiscordMessage',
			libraryExport: 'default',
		},
	},
};
