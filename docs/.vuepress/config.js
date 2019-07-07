module.exports = {
	title: 'Vue Discord Message',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
		],
		sidebar: [
			{
				title: 'Package',
				children: [
					'/',
					['/installation-and-usage.html', 'Installation & Usage'],
				],
				collapsable: false,
			},
		],
		sidebarDepth: 3,
		editLinks: true,
		lastUpdated: true,
	},
};
