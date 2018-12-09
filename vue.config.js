module.exports = {
	productionSourceMap: false,
	css: { extract: false },
	configureWebpack: {
		output: {
			library: 'VueDiscordMessage',
			libraryExport: 'default',
		},
	},
	chainWebpack(config) {
		config.module
			.rule('images')
			.use('url-loader')
			.loader('url-loader')
			.tap(options => Object.assign(options, { limit: 10240 }));
	},
};
