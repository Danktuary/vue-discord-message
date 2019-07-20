module.exports = {
	title: 'Vue Discord Message',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Plugin Options', link: '/plugin-options.html' },
			{ text: 'Components Reference', link: '/components-reference.html' },
			{ text: 'Examples', link: '/examples.html' },
		],
		sidebar: [
			{
				title: 'Package',
				children: [
					'/',
					['/installation-and-usage.html', 'Installation & Usage'],
					'/plugin-options.html',
					'/components-reference.html',
					'/examples.html',
				],
				collapsable: false,
			},
		],
		sidebarDepth: 3,
		editLinks: true,
		lastUpdated: true,
	},
};
