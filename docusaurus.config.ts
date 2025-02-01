import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: 'Aide Réseaux',
	tagline: 'Association d\'entraide sur les contenus en ligne',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://Aide-Reseaux.github.io',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/blog',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'Aide-Reseaux', // Usually your GitHub org/user name.
	projectName: 'blog', // Usually your repo name.

	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'fr',
		locales: ['fr'],
	},

	presets: [
		[
			'classic',
			{
				docs: false,
				blog: {
					routeBasePath: '/',
					showReadingTime: true,
					feedOptions: {
						type: ['rss', 'atom'],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/Aide-Reseaux/blog/tree/main/blog/',
					// Useful options to enforce blogging best practices
					onInlineTags: 'warn',
					onInlineAuthors: 'warn',
					onUntruncatedBlogPosts: 'warn',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/social-card.jpg',
		navbar: {
			title: undefined,
			logo: {
				alt: 'Logo d\'Aide Réseaux',
				src: 'img/logo-long.svg',
			},
			items: [
				{
					href: 'https://github.com/Aide-Reseaux/blog',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Blog',
					items: [
						{
							label: 'Page d\'accueil',
							to: '/',
						},
					],
				},
				{
					title: 'Notre communauté',
					items: [
						{
							label: 'Discord',
							href: 'https://discord.com/invite/reseaux',
						},
						{
							label: 'YouTube',
							href: 'https://www.youtube.com/@AideReseaux',
						},
						{
							label: 'Instagram',
							href: 'https://www.instagram.com/AideReseaux',
						},
						{
							label: 'TikTok',
							href: 'https://www.tiktok.com/@AideReseaux'
						},
						{
							label: 'X (Twitter)',
							href: 'https://x.com/AideReseaux',
						},
						{
							label: 'Twitch',
							href: 'https://www.twitch.tv/AideReseaux'
						},
						{
							label: 'Kick',
							href: 'https://kick.com/AideReseaux'
						}
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Aide Réseaux.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
