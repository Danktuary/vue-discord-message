module.exports = {
	title: 'Vue Discord Message',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Plugin Options', link: '/plugin-options.html' },
		],
		sidebar: [
			{
				title: 'Package',
				children: [
					'/',
					['/installation-and-usage.html', 'Installation & Usage'],
					'/plugin-options.html',
				],
				collapsable: false,
			},
		],
		sidebarDepth: 3,
		editLinks: true,
		lastUpdated: true,
	},
};
