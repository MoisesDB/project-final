import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'example-component',
				title: 'Example',
				translate: 'EXAMPLE',
				type: 'item',
				icon: 'whatshot',
				url: '/example'
			},
			{
				id: 'products-component',
				title: 'Products',
				translate: 'Products',
				type: 'item',
				icon: 'folder',
				url: '/products'
			},
			{
				id: 'messages-component',
				title: 'Messages',
				translate: 'Messages',
				type: 'item',
				icon: 'folder',
				url: '/messages'
			}
		]
	}
];

export default navigationConfig;
