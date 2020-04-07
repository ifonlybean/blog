module.exports = {
    base: '/blog/',
    title: '我的博客',
    port: '8888',
    description: 'Vuepress blog demo',
    head: [
        ['link', { rel: 'icon', href: '/vue-logo.png' }]
    ],
    themeConfig: {
        repo: 'https://github.com/ifonlybean/blog',
        repoLabel: 'GitHub',
  	    nav: [
  		    { text: 'Home', link: '/' },
  		    { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
  	    ],
  	    sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '我的第一篇博客']
        ]
    }
}
